class RemoveBlogs < ActiveRecord::Migration[5.0]
  def up
    drop_table :blogs
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
