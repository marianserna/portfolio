class PagesController < ApplicationController
  def home
    @portfolio_items = PortfolioItem.order(position: :desc).all
  end
end
