class DreamSerializer < ActiveModel::Serializer
  attributes :id, :dream, :category, :status, :due
  has_one :list
end
