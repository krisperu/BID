class ImageSerializer < ActiveModel::Serializer
    attributes :id, :image
    has_one :user
end