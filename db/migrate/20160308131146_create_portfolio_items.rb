class CreatePortfolioItems < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolio_items do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.string :item_url
      t.attachment :background_image

      t.timestamps
    end
  end
end
