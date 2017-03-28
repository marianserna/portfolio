class CreateCodeHighlights < ActiveRecord::Migration[5.0]
  def change
    create_table :code_highlights do |t|
      t.integer :case_study_id, null: false
      t.attachment :image
      t.text :caption, null: false
      t.integer :position, null: false, default: 0
      t.timestamps
    end

    # 1. Table you wnat the index on, 2. What column(s) you want to index (for several, use [])
    add_index :code_highlights, :case_study_id
  end
end
