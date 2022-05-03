class AddScheduleSendToLists < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :schedule_send, :datetime
  end
end
