class CreateMemories < ActiveRecord::Migration[6.1]
  def change
    create_table :memories do |t|
      t.string :title
      t.string :desc
      t.string :img_one
      t.string :img_two
      t.string :img_three
      t.integer :rating
      t.references :user, null: false, foreign_key: true
      t.references :dream, null: false, foreign_key: true

      t.timestamps
    end
  end
end
