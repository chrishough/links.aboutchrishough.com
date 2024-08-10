source 'https://rubygems.org'

ruby '3.3.4'

if Gem::Version.new( Bundler::VERSION ) < Gem::Version.new( '2.0.0' )
  abort 'Bundler version >= 2.X.X is required'
end

gem 'rake'
gem 'highline'
gem 'require_all'

gem 'builder'
gem 'middleman', '~> 4.5', '>= 4.5.1'
gem 'middleman-minify-html'
gem 'redcarpet'

# Unfortunately Middleman v4 incompatible with slim v5
# https://stackoverflow.com/a/77356029/161869
gem 'slim', '~>4.0'
gem 'titleize'

group :development do
  gem 'pry'
  gem 'pry-nav'
  gem 'rubocop'
  gem 'rb-readline'
end
