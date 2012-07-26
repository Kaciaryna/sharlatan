# encoding: utf-8
require 'sinatra/base'

class App < Sinatra::Base
  set :haml, :format => :html5

  get '/' do
    @menu = []
    haml :index
  end

  get '/astrology/?' do
    @menu = [{:url => '/astrology', :name => 'Астрология'}]
    haml :"astrology/index"
  end
end