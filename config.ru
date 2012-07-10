require 'bundler/setup'

require 'sass/plugin/rack'
require 'rack/coffee_compiler'

require "./app"


class App < Sinatra::Base
  configure do
    set :app_file, __FILE__
    set :views, Proc.new { File.join(root, "app/views") }
  end
end

Sass::Plugin.options.merge!(
    :always_update     => true,
    :always_check      => true,
    :full_exception    => true,
    :template_location => './app/style',
    :css_location      => './public/css',
    :cache_location    => './tmp/sass-cache',
)
use Sass::Plugin::Rack

use Rack::CoffeeCompiler,
    :source_dir     => './app/code',
    :url            => '/js',
    :alert_on_error => true

run App