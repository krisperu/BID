class Dream < ApplicationRecord
  belongs_to :list
  has_many :details, dependent: :destroy
  has_many :memories, dependent: :destroy

  validates :dream, presence: true, uniqueness: true
end
