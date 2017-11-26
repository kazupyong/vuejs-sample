require 'sinatra'
require 'sinatra/reloader'
require 'rabl'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  slim :app
end
