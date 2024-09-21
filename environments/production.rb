# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'yarn run production',
         source: 'build'

activate :asset_hash, exts: %w[.jpg .png]

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = false
  html.remove_quotes = true
end

set :protocol, 'https://'
set :host, 'links.aboutchrishough.com'
set :port, 80

# TODO!
# require_relative '../lib/build'
#
# after_build { adjust_final_source }
