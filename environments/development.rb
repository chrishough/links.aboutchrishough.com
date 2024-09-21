# frozen_string_literal: true

Bundler.require(:development)

Slim::Engine.set_options(pretty: true)

activate :external_pipeline,
         name: :webpack,
         command: 'yarn run develop',
         source: 'build'
