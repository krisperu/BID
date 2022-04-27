class MemoriesController < ApplicationController
    before_action :find_memory, only: [:show, :update, :destroy]

    def index
        render json: Memory.all
    end

    def show
        render json: @memory, status: :ok
    end

    def create
        memory = Memory.create!(memory_params)
        render json: memory, status: :created
    end

    def update
        memory = @memory.update!(memory_params)
        render json: memory, status: :accepted
    end

    def destroy
        @memory.destroy
        head :no_content
    end

    private

    def find_memory
        @memory = Memory.find(params[:id])
    end

    def memory_params
        params.permit(:title, :desc, :img_one, :img_two, :img_three, :rating, :user_id)
    end
end
