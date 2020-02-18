class User < ApplicationRecord
    has_secure_password
    has_many :portfolio_items, dependent: :destroy
    has_many :trades, dependent: :destroy
    validates :email, uniqueness: true
    
end
