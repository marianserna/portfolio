class PortfolioItem < ApplicationRecord

  ## Constants

  CATEGORIES = {
    'animation' => 'Animation & 3d',
    'web_design' => 'Design',
    'photography' => "Photography",
    'web_dev' => 'Development',
    'video' => 'Video',
    'illustrator' => 'Illustration'
  }

  DEFAULT_STYLE = {
    details_position_class: 'left',
    color: '#FFF',
    background_color: 'transparent'
  }

  ## Attributes

  store :style_settings, accessors: DEFAULT_STYLE.keys

  ## Extensions

  has_attached_file :background_image, styles: { thumb: "200x200>" }
  validates_attachment_content_type :background_image, content_type: /\Aimage\/.*\Z/

  ## Validations

  validates :category, presence: true

  ## Callbacks

  after_initialize :copy_default_theme
  before_validation :copy_default_theme

  ## Class Methods

  def self.categories_for_select
    CATEGORIES.invert
  end

  ## Instance Methods

  def category_name
    CATEGORIES.fetch(category)
  end

  def vimeo_id
    return nil unless vimeo_url.present?
    match = vimeo_url.match(%r{(?<id>\d{5,})})
    match[:id]
  end

  def copy_default_theme
    DEFAULT_STYLE.keys.each do |key|
      if send(key).blank?
        send("#{key}=", DEFAULT_STYLE[key])
      end
    end
  end

  def classes
    "item-#{id} #{details_position_class}"
  end
end
