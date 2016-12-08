class AddSubtitleToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :subtitle, :string
  end
end
