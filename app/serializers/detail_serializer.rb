class DetailSerializer < ActiveModel::Serializer
  attributes :id, :details, :image
  has_one :dream
end
