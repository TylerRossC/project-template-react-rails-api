class BlocksController < ApplicationController
    
    def index 
        if session[:user_id]
            user = User.find(session[:user_id])
            blocks = {blocks: user.blocks}
            render json: blocks, status: :ok
        end

    end

    def create
        if session[:user_id]
            block = Block.create(block_params)
            block.update!(user_id: session[:user_id])
            render json: { block: block }, status: :created
        else
            render json: { errors: ["log in to create a TimeBlock"] }, status: :unauthorized
        end
    end

    def show 
        block = Block.find(params[:id])
        render json: {block: block}
    end

    def update 
        block = Block.find(params[:id])
        if block[:user_id] == session[:user_id]
            block.update(block_params)
            render json: { block: block }, status: :accepted
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized 
        end
    end

    def destroy 
       block = Block.find(params[:id])
       if block[:user_id] === session[:user_id]
            block.destroy 
            head :no_content
       else
        render json: {errors: ["Not authorized"]}, status: :unauthorized 
       end
    end

    private 

    def block_params
        params.permit(:user_id, :title, :time, :date)
    end
end
