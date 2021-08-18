class CreateBlocks < ActiveRecord::Migration[6.1]
  def change
    create_table :blocks do |t|
      t.string :title
      t.string :time
      t.date :date

      t.timestamps
    end
  end
end
