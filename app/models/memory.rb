class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :dream

  validates :title, presence: true
  validates :rating, inclusion: 1..5
end
