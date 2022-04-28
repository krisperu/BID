class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :dream

  validates :title, presence: true
end
