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

    def destroy
        @list.destroy
        head :no_content
    end

    private

    def find_list
        @list = List.find(params[:id])
    end

    def list_params
        params.permit(:title, :user_id)
    end
end
