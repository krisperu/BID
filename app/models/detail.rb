class Detail < ApplicationRecord
  belongs_to :dream

  validates :details, presence: true
end
