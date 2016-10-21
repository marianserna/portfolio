ruby '2.3.0'
source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0', '>= 5.0.0.1'
# Use postgres as the database for Active Record
gem 'pg', '~> 0.18.4'
# Use Puma as the app server
gem 'puma'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 3.0', '>= 3.0.2'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# For image uploading
gem 'paperclip', '~> 4.3', '>= 4.3.5'
# For generating html
gem 'haml', '~> 4.0', '>= 4.0.7'
# For generating forms
gem 'simple_form', '~> 3.2', '>= 3.2.1'
# Bootstrap
gem 'bootstrap', '~> 4.0.0.alpha3'

gem 'underscore-rails', '~> 1.8', '>= 1.8.3'
gem 'font-awesome-rails', '~> 4.6', '>= 4.6.1.0'
gem 'mustache-js-rails', '~> 2.0', '>= 2.0.6'

# Markdown processing
gem 'redcarpet', '~> 3.3', '>= 3.3.4'

gem 'codemirror-rails', '~> 5.11'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-rails', '~> 3.5.2'
  gem 'pry', '~> 0.10.3'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'rails_12factor', '~> 0.0.3'
  gem 'aws-sdk', '< 2.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
