class PagesController < ApplicationController
  def home
    @portfolio_items = PortfolioItem.order(position: :asc).all
  end
end
