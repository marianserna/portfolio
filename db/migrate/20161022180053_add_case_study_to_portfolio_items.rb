class AddCaseStudyToPortfolioItems < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolio_items, :case_study, :boolean, null: false, default: false
  end
end
