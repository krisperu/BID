class ListsController < ApplicationController
    before_action :find_list, only: [:show, :update, :destroy]
    before_action :user_id, only: :index

    def index
        render json: user_id.lists.all, include: ['dreams', 'dreams.details']
    end

    def show
        render json: @list, status: :ok
    end

    def create
        list = List.create!(list_params)
        render json: list, status: :created
    end

    def update
        @list.update!(list_params)
        render json: @list, status: :accepted
    end

    def email_list
        @sending_list = List.find(params[:id])
        @sending_list.update!(list_params)
        @user = user_id
        # sending_user = User.find(List.user_id)
        ListMailer.with(sending_list: @sending_list, user: @user).send_list.deliver_now
        render json: @sending_list, status: :accepted
    end

    def destroy
        @list.destroy
        head :no_content
    end

    private

    def find_list
        @list = List.find(params[:id])
    end

    def list_params
        params.permit(:id, :title, :schedule_send, :user_id)
    end
end
