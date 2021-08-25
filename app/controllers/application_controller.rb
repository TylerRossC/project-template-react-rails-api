class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  before_action :authorize

  private

  def invalid_record(e)
      render json: { errors: e.record.errors.full_messages }, status: 400
  end

  def authorize
      if !session[:user_id]
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
      else
          @current_user = User.find(session[:user_id])
      end 
  end
end
