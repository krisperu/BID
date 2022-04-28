class Dream < ApplicationRecord
  belongs_to :list
  has_many :details
  has_many :memories

  validates :dream, presence: true
end
