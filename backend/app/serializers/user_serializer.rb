class UserSerializer < ActiveModel::Serializer
      attributes :id, :first_name, :last_name, :email, :cash
      has_many :portfolio_items
      has_many :trades
    
end
