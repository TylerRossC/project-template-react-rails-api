class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: { user: user }, status: :created
    end

    def show
        # check for session id and log user in if they have one
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: { user: user }, status: :ok
        end
        # user = User.find_by(id: session[:user_id])
        # if user 
        #     render json: { user: user }
        # else
        #     render json: { errors: ["Not authorized"] }, status: :unauthorized
        # end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
