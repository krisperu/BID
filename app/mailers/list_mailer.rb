class ListMailer < ApplicationMailer
    default from: 'beforeidieapplication@gmail.com'

    def send_list
        @user = params[:user]
        @sending_list = params[:sending_list]
        @list_items = @sending_list.dreams.map {|item| item.dream}
        @url = 'https://beforeidieapp.herokuapp.com/'
        mail(
            from: "Before I Die | A Bucket List App",
            to: @user.email, 
            subject: "You #{@sending_list.title} Bucket List "
        )
    end
end
