# frozen_string_literal: true

require 'yaml'

class WebpackBuild
  attr_reader :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def initialize(mode:)
    self.mode = mode
    self.global_webpack_config_js = File.read('webpack/global.webpack.config.js')
    self.insert_webpack_plugins = ''
    self.insert_webpack_plugin_merges = ''
  end

  def run
    _substitute_plugins
    _write_out_configuration
  end

  private

  attr_writer :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def _substitute_plugins
    return _remove_plugins unless _development?

    _append_plugins
    _process_substitution(insert_webpack_plugins, '{{insert-webpack-plugins}}')
    _process_substitution(insert_webpack_plugin_merges, '{{insert-webpack-plugin-merges}}')
  end

  def _append_plugins
    Dir.glob('webpack/plugins/*.js') do |file|
      self.insert_webpack_plugins = "#{insert_webpack_plugins}\n#{File.read(file)}"
      self.insert_webpack_plugin_merges = "#{insert_webpack_plugin_merges},#{file.constant_name}"
    end
  end

  def _remove_plugins
    process_substitution('', '{{insert-webpack-plugins}}')
    process_substitution('', '{{insert-webpack-plugin-merges}}')
  end

  def _write_out_configuration
    File.write('webpack.config.js', global_webpack_config_js)
  end

  def _development?
    mode == 'development'
  end

  def _process_substitution(str_to_use, str_to_replace)
    global_webpack_config_js[str_to_replace] = str_to_use
  end
end
