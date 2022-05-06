class Dream < ApplicationRecord
  belongs_to :list
  has_many :details, dependent: :destroy
  has_many :memories, dependent: :destroy

  scope :completed_dreams, -> {where(status: true)}

  validates :dream, presence: true
end
