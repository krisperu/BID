class SendListController < ApplicationController
    def show
        list = SendList.find(params[:id])
        render json: list
    end

    def create
        
    end
end
