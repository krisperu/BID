class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :dream

  validates :title, presence: true
  validates :rating, numericality: {in: 1..5}
end
