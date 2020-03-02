class PortfolioItemsController < ApplicationController
    def index
        render json: PortfolioItem.all
    end 

    def show
        portfolio_item = PortfolioItem.find(params.require(:id))
        render json: portfolio_item
      end
    
    def create
      pi = PortfolioItem.find_by(ticker: portfolio_item_params[:ticker], user_id: portfolio_item_params[:user_id])
      if !pi.nil?
        pi.update(quantity: (portfolio_item_params[:quantity].to_i + pi[:quantity].to_i))
        render json: pi
        return
      else
        portfolio_item = PortfolioItem.create(portfolio_item_params)
        if portfolio_item.valid?
          render json: portfolio_item
        else
          render json: { errors: portfolio_item.errors.full_messages }, status: :unprocessable_entity
        end
      end 
      end
    
      def update
        portfolio_item = PortfolioItem.find(params.require(:id))
        portfolio_item.update(portfolio_item_params)
        render json: portfolio_item
      end
    
      def destroy
        portfolio_item = PortfolioItem.find(params.require(:id))
        if portfolio_item[:quantity].to_i > portfolio_item_params[:quantity].to_i
          portfolio_item.update(quantity: (portfolio_item[:quantity].to_i - portfolio_item_params[:quantity].to_i))
          render json: portfolio_item
          return
        else 
          portfolio_item.destroy
          render json: portfolio_item
        end 
      end 

      private 
      def portfolio_item_params
        params.require(:portfolio_item).permit(:ticker, :quantity, :user_id)
      end
end
