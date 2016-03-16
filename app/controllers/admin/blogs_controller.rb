class Admin::BlogsController < Admin::BaseController
  def index
    @blogs = Blog.all
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      redirect_to admin_blogs_url
    else
      render :edit
    end
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to admin_blogs_url
    else
      render :new
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to admin_blogs_url
  end


  private

  def blog_params
    params.require(:blog).permit(:title, :body, :category, :image, :summary, :slug, :published)
  end
end