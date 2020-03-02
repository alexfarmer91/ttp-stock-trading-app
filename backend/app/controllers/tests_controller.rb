class TestsController < ApplicationController

    def index
     render json: {"message" => "success"}
    end 
end