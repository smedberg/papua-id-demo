class SessionsController < ApplicationController
  def new
  end

  def create
    redirect_to new_session_url, alert: I18n.t('session.new.incorrect') and return unless @logged_in_user = User.find_by(email: login_params[:email])&.authenticate(login_params[:password])
    session[:user_id] = @logged_in_user.id
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    reset_session
    redirect_to new_session_url, notice: I18n.t('session.new.logout')
  end

  protected

  def login_params
    params.permit(:email, :password)
  end
end