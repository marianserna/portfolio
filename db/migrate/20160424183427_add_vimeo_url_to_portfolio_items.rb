class AddVimeoUrlToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :vimeo_url, :string
  end
end
