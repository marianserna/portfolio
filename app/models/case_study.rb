class CaseStudy < ApplicationRecord

  # Relations

  # Scopes

  # Validations
  validates :slug, :title, :video_url, :description, :description_image,
    :challenges, :challenges_image, :position, presence: true

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

  has_attached_file :techmologies_image, styles: {
    thumb: "200x200>",
    hero: "2880x1800>"
  }
  validates_attachment_content_type :techmologies_image, content_type: /\Aimage\/.*\Z/

  # Callbacks

  # Methods

end
