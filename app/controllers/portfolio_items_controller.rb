class PortfolioItemsController < ApplicationController
  def index
  end
  
  def show
    @portfolio_item = PortfolioItem.find(params[:id])
  end
end
