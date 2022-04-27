class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :details
      t.string :image
      t.references :dream, null: false, foreign_key: true

      t.timestamps
    end
  end
end
