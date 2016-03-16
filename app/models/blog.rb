class Blog < ApplicationRecord
  CATEGORIES = {
    'animation' => 'Animation',
    'web_design' => 'Web Design',
    'web_dev' => 'Web Development',
    'video' => 'Video'
  }


  has_attached_file :image, styles: { thumb: "200x200>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :title, :body, :category, :slug, presence: true

  def self.categories_for_select
    CATEGORIES.invert
  end

  def category_name
    CATEGORIES.fetch(category)
  end
end