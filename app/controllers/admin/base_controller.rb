class Admin::BaseController < ApplicationController
  layout 'admin'
  http_basic_authenticate_with name: ENV.fetch('AUTH_USER', 'user'), password: ENV.fetch('AUTH_PASSWORD', 'password')
end