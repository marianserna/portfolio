class PagesController < ApplicationController
  def home
    @portfolio_items = PortfolioItem.where.not(category: 'photography').last(10)
    @photographs = PortfolioItem.where(category: 'photography').last(5)
    @blogs = Blog.last(2)
  end
end
