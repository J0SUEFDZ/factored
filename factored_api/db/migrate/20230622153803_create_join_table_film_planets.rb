class CreateJoinTableFilmPlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :film_planets, id: false do |t|
      t.belongs_to :planet
      t.belongs_to :film
    end

    add_index :film_planets, [:planet_id, :film_id]
    add_index :film_planets, [:film_id, :planet_id]
  end
end
