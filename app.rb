# encoding: utf-8
require 'sinatra/base'

class App < Sinatra::Base
  set :haml, :format => :html5

  get '/' do
    @title = 'Шарлатан.info — научная точка зрения на окружающий мир'
    haml :index
  end

  get '/astrology/?' do
    @title = 'Астрология'
    haml :"astrology/index"
  end
end