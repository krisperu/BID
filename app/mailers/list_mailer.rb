class ListMailer < ApplicationMailer
    default from: 'beforeidieapplication@gmail.com'

    def send_list
        # @sending_list = sending_list
        # @user = params[:user]
        @url = 'https://beforeidieapp.herokuapp.com/'
        mail(
            to: "krissy_hollister3@yahoo.com", 
            subject: "Test email"
        )
    end
end
