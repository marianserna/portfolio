class PortfolioItemsController < ApplicationController
  def show
    @portfolio_item = PortfolioItem.find(params[:id])
  end
end
