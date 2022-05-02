class DreamSerializer < ActiveModel::Serializer
  attributes :id, :dream, :category, :status, :due
  has_one :list
  has_many :details
  has_many :memories
end
