class Api::UsersController < ApplicationController

  def create
    @user = User.new(users_params)
    file = File.open("app/assets/images/Ethan.jpeg")
    @user.image.attach(io: file, filename: 'app/assets/images/Ethan.jpeg')
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:playlists).find(params[:id])
  end

  private

  def users_params
    params.require(:user).permit(:username, :password, :email)
  end

end
