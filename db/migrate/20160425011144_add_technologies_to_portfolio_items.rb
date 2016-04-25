class AddTechnologiesToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :technologies, :text
  end
end
