class TradeSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :quantity, :price, :buy, :type
  has_one :user
end
