class TradesController < ApplicationController
    def index
        render json: Trade.all
    end 

    def show
        trade = Trade.find(params.require(:id))
        render json: trade
      end
    
    def create
        trade = Trade.create(trade_params)
        if trade.valid?
          render json: trade
        else
          render json: { errors: trade.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      def update
        trade = Trade.find(params.require(:id))
        trade.update(trade_params)
        render json: trade
      end
    
      def destroy
        trade = Trade.find(params.require(:id))
        trade.destroy
        render json: trade
      end 

      private 
      def trade_params
        params.require(:trade).permit(:ticker, :quantity, :price, :buy, :type, :user_id)
      end
end
