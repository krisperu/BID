class ImagesController < ApplicationController
  before_action :user_id, only: :index

  def index
    render json: user_id.images.last
  end

  def create
      image = Cloudinary::Uploader.upload(params[:images])
      item = Image.create(image: image['url'], user_id: user_id.id)
      
      render json: {
        status: 200,
        item: item
      }
    end
end
