class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :ticker
      t.float :cost_per_share
      t.integer :quantity
      t.boolean :buy
      t.string :type #limit, market, etc
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
