class Admin::PortfolioItemsController < Admin::BaseController
  def index
    @portfolio_items = PortfolioItem.all
  end

  def edit
    @portfolio_item = PortfolioItem.find(params[:id])
  end

  def update
    @portfolio_item = PortfolioItem.find(params[:id])
    if @portfolio_item.update(portfolio_params)
      redirect_to edit_admin_portfolio_item_url(@portfolio_item)
    else
      render :edit
    end
  end

  def new
    @portfolio_item = PortfolioItem.new
  end

  def create
    @portfolio_item = PortfolioItem.new(portfolio_params)
    if @portfolio_item.save
      redirect_to admin_portfolio_items_url
    else
      render :new
    end
  end

  def destroy
    @portfolio_item = PortfolioItem.find(params[:id])
    @portfolio_item.destroy
    redirect_to admin_portfolio_items_url
  end

  private

  def portfolio_params
    params.require(:portfolio_item).permit(:title, :project, :category, :item_url,
      :background_image, :vimeo_url, :technologies, :details_position_class, :color,
      :background_color, :position, :case_study, :takeout, :approach
    )
  end
end
