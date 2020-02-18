class PortfolioItemSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :quantity
  has_one :user
end
