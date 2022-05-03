class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :schedule_send
  has_one :user
  has_many :dreams
end
