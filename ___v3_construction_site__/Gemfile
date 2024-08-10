source 'https://rubygems.org'

ruby '3.3.4'

if Gem::Version.new( Bundler::VERSION ) < Gem::Version.new( '2.0.0' )
  abort 'Bundler version >= 2.X.X is required'
end

gem 'rake'
gem 'highline'
gem 'require_all'

gem 'builder'
gem 'middleman', '~> 4'
gem 'middleman-minify-html'
# gem 'middleman-deploy', git: 'https://github.com/middleman-contrib/middleman-deploy', branch: 'master'
gem 'redcarpet'

gem 'slim'
gem 'titleize'
gem 'stringex'

group :development do
  gem 'pry'
  gem 'pry-nav'
  gem 'rubocop'
  gem 'rb-readline'
end
