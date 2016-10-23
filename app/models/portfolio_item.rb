class PortfolioItem < ApplicationRecord

  ## Constants

  DEFAULT_STYLE = {
    details_position_class: 'left',
    color: '#FFF',
    background_color: 'transparent'
  }

  ## Attributes

  store :style_settings, accessors: DEFAULT_STYLE.keys

  ## Extensions

  has_attached_file :background_image, styles: {
    thumb: "200x200>",
    grid_thumb: "800x800>",
    hero: "1441x800>"
  }
  validates_attachment_content_type :background_image, content_type: /\Aimage\/.*\Z/

  ## Validations

  validates :category, presence: true

  ## Callbacks

  after_initialize :copy_default_theme
  before_validation :copy_default_theme

  ## Class Methods

  ## Instance Methods

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
end
