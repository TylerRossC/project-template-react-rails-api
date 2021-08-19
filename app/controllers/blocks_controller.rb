class BlocksController < ApplicationController
    
    def index 
        blocks = Block.all
        render json: {blocks: blocks}, status: :ok
    end

    def create
        if session[:user_id]
            block = Block.create(block_params)
            block.update!(user_id: session[:user_id])
            render json: { block: block }, status: :created
        else
            render json: { errors: ["log in to create a TimeBlock"] }, status: :unauthorized
        end
        # block = @current_user.blocks.build(block_params)
        # if block.save! 
        #     render json: { block: block }, status: 201
        # end
    end

    def show 
        block = Block.find(params[:id])
        render json: {block: block}
    end

    def update 
    
    end

    def destroy 
       block = Block.find(params[:id])
       if post[:user_id] === session[:user_id]
            block.destroy 
            head :no_content
       else
        render json: {errors: ["Not authorized"]}, status: :unauthorized 
       end
    end

    private 

    def block_params
        params.permit(:title, :time, :date)
    end
end
