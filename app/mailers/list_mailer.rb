class ListMailer < ApplicationMailer
    default from: 'beforeidieapplication@gmail.com'

    def send_list
        # @sending_list = sending_list
        # @user = params[:user]
        @url = 'https://beforeidieapp.herokuapp.com/'
        mail(
            to: "to@example.org", 
            subject: "Test email"
        )
    end
end
