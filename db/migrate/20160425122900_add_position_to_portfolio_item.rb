class AddPositionToPortfolioItem < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :position, :integer, null: false, default: 0
  end
end
