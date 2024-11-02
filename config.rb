# frozen_string_literal: true

Bundler.require(:default)

require 'pry'
require 'slim'

Slim::Engine.disable_option_validator!

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true
set :images_dir, 'assets/images'

require_relative 'lib/webpack/webpack_assets'
autoload :WebpackAssets, 'lib/webpack/webpack_assets'

helpers WebpackAssets

ignore 'assets/stylesheets/*'
ignore 'assets/javascripts/*'
ignore 'partials/*'
ignore 'rev-manifest.json'
