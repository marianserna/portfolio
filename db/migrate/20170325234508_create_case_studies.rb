class CreateCaseStudies < ActiveRecord::Migration[5.0]
  def change
    create_table :case_studies do |t|
      t.string :slug, null: false
      t.string :title, null: false
      t.string :video_url, null: false
      t.text :description, null: false
      t.attachment :description_image
      t.text :technologies, null: false
      t.attachment :technologies_image
      t.text :challenges, null: false
      t.attachment :challenges_image
      t.integer :position, null: false, default: 0
      t.datetime :published_at
      t.timestamps
    end
  end
end
