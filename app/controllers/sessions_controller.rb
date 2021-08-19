class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { user: user }, status: :ok
        else
            render json: { errors: ['Invalid username and/or password.']}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.destroy 
        else
            render json: { errors: ["No user logged in"] }, status: :unauthorized
        end
    end
end
