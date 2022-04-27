class CreateDreams < ActiveRecord::Migration[6.1]
  def change
    create_table :dreams do |t|
      t.string :dream
      t.string :category
      t.boolean :status, :default => false
      t.date :due
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
