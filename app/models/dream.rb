class Dream < ApplicationRecord
  belongs_to :list
  has_many :details
  has_many :memories
end
