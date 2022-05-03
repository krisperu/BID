class ListsController < ApplicationController
    before_action :find_list, only: [:show, :update, :destroy]

    def index
        render json: List.all, include: ['dreams', 'dreams.details']
    end

    def show
        render json: @list, status: :ok
    end

    def create
        list = List.create!(list_params)
        render json: list, status: :created
    end

    def update
        list = @list.update!(list_params)
        render json: list, status: :accepted
    end

    def email_list
        sending_list = List.find(params[:id])
        sending_list.update!(list_params)
        # sending_user = User.find(List.user_id)
        ListMailer.with(sending_list: @sending_list, user: user_id).send_list.deliver_now
        render json: sending_list, status: :accepted
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
        params.permit(:title, :schedule_send, :user_id)
    end
end
