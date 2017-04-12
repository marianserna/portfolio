class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  # Make sure links are https
  def default_url_options(options = {})
    options.merge!(protocol: :https) if Rails.env.production?
    options
  end
end
