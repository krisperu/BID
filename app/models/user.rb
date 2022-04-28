class User < ApplicationRecord
    has_secure_password

    has_many :lists, dependent: :destroy
    has_many :memories, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, uniqueness: true
    validates :password, presence: true
end
