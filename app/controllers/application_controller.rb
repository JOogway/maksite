class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception
  helper_method :current_user
  #before_action :require_login, :configure_permitted_parameters, if: :devise_controller?
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  
  def authorize
    redirect_to '/users/sign_in' unless current_user
  end
  
  protected
  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :invite]
  	devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  private
  def require_login
    unless current_admin
      redirect_to admin_session_path
    end
  end
end