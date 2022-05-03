# Preview all emails at http://localhost:3000/rails/mailers/list
class ListPreview < ActionMailer::Preview
    def send_list
        ListMailer.with(sending_list: List.first, user: User.first).send_list
    end
end
