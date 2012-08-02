# encoding: utf-8
require 'sinatra/base'

PAGES = {
    'astrology' => 'Астрология',
    'about_science' => '&laquo;официальная наука&raquo;'
}.freeze

class App < Sinatra::Base
  set :haml, :format => :html5

  get '/' do
    @menu = {}
    haml :index
  end

  get '/:page/?' do
    page = params[:page]
    name = PAGES[page]

    halt 404 if page.nil? || name.nil?

    @menu = {:page => page, :name => name}
    haml :"#{page}/index"
  end
end