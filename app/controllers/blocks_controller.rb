class BlocksController < ApplicationController
    def index 
        blocks = Block.all
        render json: blocks 
    end

    def create 
        block = Block.create!(block_params)
        render json: block, status: :created
    end

    def show 
        block = Block.find(params[:id])
        render json: block
    end

    def update 
    
    end

    def destroy 
    
    end

    private 

    def block_params
        params.permit(:title, :time, :date)
    end
end
