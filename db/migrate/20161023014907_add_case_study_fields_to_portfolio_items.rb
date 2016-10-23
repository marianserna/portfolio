class AddCaseStudyFieldsToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    rename_column(:portfolio_items, :description, :project)
    add_column :portfolio_items, :approach, :text
    add_column :portfolio_items, :takeout, :text
  end
end
