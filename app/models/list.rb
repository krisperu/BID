class List < ApplicationRecord
  belongs_to :user
  has_many :dreams

  validates :title, presence: true
end
