class AddStyleSettingsToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :style_settings, :text
    add_column :portfolio_items, :featured, :boolean, default: true, null: false
  end
end
