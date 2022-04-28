class List < ApplicationRecord
  belongs_to :user
  has_many :dreams, dependent: :destroy

  validates :title, presence: true
end
