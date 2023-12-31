class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.string :title
      t.integer :episode_id
      t.string :opening_crawl
      t.string :director
      t.string :producer
      t.string :release_date

      t.timestamps
    end
  end
end
