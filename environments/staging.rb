# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run staging',
         source: 'build'

Slim::Engine.set_options(pretty: true)

set :protocol, 'https://'
set :host, 'links.aboutchrishough.com'
set :port, 80

# TODO!
# require_relative '../lib/build'

after_build { adjust_final_source }
