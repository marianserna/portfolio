class PagesController < ApplicationController
  def home
    @portfolio_items = PortfolioItem.where.not(category: 'photography').all
    @photographs = PortfolioItem.where(category: 'photography').all
    @blogs = Blog.last(2)
  end
end
