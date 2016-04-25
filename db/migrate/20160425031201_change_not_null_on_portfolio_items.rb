class ChangeNotNullOnPortfolioItems < ActiveRecord::Migration[5.0]
  def up
    change_column :portfolio_items, :title, :string, null: true
    change_column :portfolio_items, :description, :text, null: true
  end

  def down
    change_column :portfolio_items, :title, :string, null: false
    change_column :portfolio_items, :description, :text, null: false
  end
end
