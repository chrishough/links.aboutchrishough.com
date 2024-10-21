# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'yarn run staging',
         source: 'build'

Slim::Engine.set_options(pretty: true)

activate :asset_hash, exts: %w[.jpg .png .webmanifest .ico .svg]

set :protocol, 'https://'
set :host, 'links.aboutchrishough.com'
set :port, 80

# TODO!
# require_relative '../lib/build'
#
# after_build { adjust_final_source }
