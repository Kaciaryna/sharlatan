require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    haml :index, :format => :html5
  end

  get '/astrology/?' do
    haml :"astrology/index", :format => :html5
  end
end