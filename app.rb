# encoding: utf-8
require 'sinatra/base'
require 'sinatra/content_for'

PAGES = {
    '/'             => 'простым языком о сложных вещах',
    'astrology'     => 'Астрология',
    'about_science' => '«Официальная» наука'
}.freeze

class App < Sinatra::Base
  helpers Sinatra::ContentFor

  set :haml, :format => :html5

  get '/' do
    @title = PAGES['/']

    haml :index
  end

  get '/:page/?' do
    @page  = params[:page]
    @title = PAGES[@page]

    halt 404 if @page.nil? || @title.nil?

    haml :"#{@page}/index"
  end
end