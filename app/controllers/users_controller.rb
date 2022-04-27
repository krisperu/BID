class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    before_action :find_user, only: [:update, :destroy]

    def index
        render json: User.all
    end

    def show
        user_id = User.find_by(id: session[:user_id])
        render json: user_id, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = @user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :name, :image, :bio)
    end

end
