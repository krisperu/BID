class MemorySerializer < ActiveModel::Serializer
  attributes :id, :title, :img_one, :img_two, :img_three, :desc, :rating
  has_one :user
  has_one :dream
end
