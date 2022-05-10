class ImagesController < ApplicationController
  # before_action :user_id, only: :create

  def index
    render json: Image.all
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
