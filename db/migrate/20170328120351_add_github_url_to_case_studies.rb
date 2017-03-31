class AddGithubUrlToCaseStudies < ActiveRecord::Migration[5.0]
  def change
    add_column :case_studies, :github_url, :string
    add_column :case_studies, :site_url, :string
  end
end
