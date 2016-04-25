class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.text :summary
      t.text :body, null: false
      t.attachment :image
      t.string :slug, null: false
      t.string :category, null: false
      t.boolean :published, null: false, default: false

      t.timestamps
    end
  end
end
