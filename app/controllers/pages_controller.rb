class PagesController < ApplicationController
  def home
    @portfolio_items = PortfolioItem.where.not(category: 'photography').order(position: :desc).all
    @photographs = PortfolioItem.where(category: 'photography').order(position: :desc).all
    @blogs = Blog.last(2)
  end
end
