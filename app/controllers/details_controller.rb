class DetailsController < ApplicationController
    before_action :find_detail, only: [:show, :update, :destroy]

    def index
        render json: Detail.all
    end

    def show
        render json: @detail, status: :ok
    end

    def create
        detail = Detail.create!(detail_params)
        render json: detail, status: :created
    end

    def update
        detail = @detail.update!(detail_params)
        render json: detail, status: :accepted
    end

    def destroy
        @detail.destroy
        head :no_content
    end

    private

    def find_detail
        @detail = Detail.find(params[:id])
    end

    def detail_params
        params.permit(:details, :image, :dream_id)
    end
end
