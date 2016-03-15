class PortfolioItem < ApplicationRecord
  CATEGORIES = {
    'animation' => 'Animation',
    'web_design' => 'Web Design',
    'web_dev' => 'Web Development',
  }


  has_attached_file :background_image, styles: { thumb: "200x200>" }
  validates_attachment_content_type :background_image, content_type: /\Aimage\/.*\Z/

  validates :title, :description, :category, presence: true

  def self.categories_for_select
    CATEGORIES.invert
  end

  def category_name
    CATEGORIES.fetch(category)
  end
end
