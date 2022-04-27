class MemorySerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :rating
  has_one :user
end
