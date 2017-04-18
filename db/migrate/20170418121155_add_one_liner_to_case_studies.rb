class AddOneLinerToCaseStudies < ActiveRecord::Migration[5.0]
  def change
    add_column :case_studies, :one_liner, :string
  end
end
