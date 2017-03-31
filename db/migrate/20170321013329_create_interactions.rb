class CreateInteractions < ActiveRecord::Migration[5.0]
  def change
    create_table :interactions do |t|
      t.string :name, null: false
      t.string :emoji, null: false
      t.string :comment
      t.integer :current_time, null: false
      t.timestamps
    end
  end
end
