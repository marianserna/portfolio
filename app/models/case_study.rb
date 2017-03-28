class CaseStudy < ApplicationRecord

  # Relations
  has_many :code_highlights

  # Scopes

  # Validations
  validates :slug, :title, :video_url, :description, :description_image,
    :challenges, :challenges_image, :position, :technologies, presence: true

  # Attachments

  has_attached_file :description_image, styles: {
    thumb: "200x200>",
    hero: "2880x1800>"
  }
  validates_attachment_content_type :description_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :challenges_image, styles: {
    thumb: "200x200>",
    hero: "2880x1800>"
  }
  validates_attachment_content_type :challenges_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :technologies_image, styles: {
    thumb: "200x200>",
    hero: "2880x1800>"
  }
  validates_attachment_content_type :technologies_image, content_type: /\Aimage\/.*\Z/

  # Callbacks

  # Methods
  def to_param
    slug
  end

end
