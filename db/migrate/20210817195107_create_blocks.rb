class CreateBlocks < ActiveRecord::Migration[6.1]
  def change
    create_table :blocks do |t|
      t.integer :user_id
      t.string :title
      t.string :time
      t.string :date

      t.timestamps
    end
  end
end
