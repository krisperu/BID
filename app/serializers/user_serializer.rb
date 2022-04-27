class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :name, :image, :bio, :admin
end
