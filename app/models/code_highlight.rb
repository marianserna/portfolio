class CodeHighlight < ApplicationRecord

  # Relations
  belongs_to :case_study

  # Scopes

  # Validations
  validates :image, :caption, :position, presence: true

  # Attachments

  has_attached_file :image, styles: {
    thumb: "200x200>",
    hero: "2880x1800>"
  }
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # Callbacks

  # Methods

end
