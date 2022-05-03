class DreamsController < ApplicationController
    before_action :find_dream, only: [:show, :update, :destroy]

    def index
        render json: Dream.all
    end

    def show
        render json: @dream, status: :ok
    end

    def create
        dream = Dream.create!(dream_params)
        render json: dream, status: :created
    end

    def update
        dream = @dream.update!(dream_params)
        render json: dream, status: :accepted
    end

    def destroy
        @dream.destroy
        head :no_content
    end

    def show_completed
        completed = user_id.dreams.completed_dreams
        render json: completed
    end

    private

    def find_dream
        @dream = Dream.find(params[:id])
    end

    def dream_params
        params.permit(:dream, :category, :status, :due, :list_id)
    end
end
