# frozen_string_literal: true

Bundler.require(:default)
require 'pry'
require 'slim'

Slim::Engine.disable_option_validator!

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true
