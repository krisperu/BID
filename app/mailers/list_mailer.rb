class ListMailer < ApplicationMailer
    default from: 'beforeidieapplication@gmail.com'

    def send_list
        @sending_list = params[:sending_list]
        puts params.inspect
        @user = params[:user]
        @url = 'https://beforeidieapp.herokuapp.com/'
        mail(
            to: @user.email, 
            subject: "Test email"
        )
    end
end
