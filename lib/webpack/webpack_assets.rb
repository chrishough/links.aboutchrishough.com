# frozen_string_literal: true

module WebpackAssets
  ASSET_FOLDER = 'assets'
  DIST_PATH = File.join(Dir.pwd, "build/#{ASSET_FOLDER}")

  def webpack_asset_path(variable, rev_manifest_name)
    "#{ASSET_FOLDER}/#{_asset(variable, rev_manifest_name)}"
  end

  private

  def _asset(variable, rev_manifest_name)
    asset = _rev_manifest(rev_manifest_name)[variable]

    raise "Can't find #{variable} in webpack assets. See #{rev_manifest_name}-manifest.json for complete list." unless asset

    asset
  end

  def _rev_manifest(rev_manifest_name)
    manifest = File.join(DIST_PATH, "#{rev_manifest_name}-manifest.json")
    raise "#{manifest} is missing." unless File.exist?(manifest)

    JSON.parse(File.read(manifest))
  end
end
