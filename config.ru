require 'bundler/setup'
require "./app"


class App < Sinatra::Base
  configure do
    set :app_file, __FILE__
    set :views, Proc.new { File.join(root, "app/views") }
  end
end

if ENV['RACK_ENV'] == 'development'
  require 'sass/plugin/rack'

  Sass::Plugin.options.merge!(
      :always_update     => true,
      :always_check      => true,
      :full_exception    => true,
      :template_location => './app/style',
      :css_location      => './public/css',
      :cache_location    => './tmp/sass-cache',
  )
  use Sass::Plugin::Rack
end

run App