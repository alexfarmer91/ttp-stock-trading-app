class PortfolioItemsController < ApplicationController
    def index
        render json: PortfolioItem.all
    end 

    def show
        portfolio_item = PortfolioItem.find(params.require(:id))
        render json: portfolio_item
      end
    
    def create
        portfolio_item = PortfolioItem.create(portfolio_item_params)
        if portfolio_item.valid?
          render json: portfolio_item
        else
          render json: { errors: portfolio_item.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      def update
        portfolio_item = PortfolioItem.find(params.require(:id))
        portfolio_item.update(portfolio_item_params)
        render json: portfolio_item
      end
    
      def destroy
        portfolio_item = PortfolioItem.find(params.require(:id))
        portfolio_item.destroy
        render json: portfolio_item
      end 

      private 
      def portfolio_item_params
        params.require(:portfolio_item).permit(:ticker, :quantity, :user_id)
      end
end
