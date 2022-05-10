class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :name, :image, :bio, :admin
  has_many :memories
  has_many :lists
  has_many :images
end
