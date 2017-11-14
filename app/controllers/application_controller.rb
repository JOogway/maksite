class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #before_action :require_login, :configure_permitted_parameters, if: :devise_controller?
  
  protected

  def configure_permitted_parameters
  	devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password,:password_confirmation, :invite])
  end

  private
  def require_login
    unless current_admin
      redirect_to admin_session_path
    end
  end
end
