class CreateJoinTableFilmPeople < ActiveRecord::Migration[6.1]
  def change
    create_table :film_people, id: false do |t|
      t.belongs_to :person
      t.belongs_to :film
    end

    add_index :film_people, [:person_id, :film_id]
    add_index :film_people, [:film_id, :person_id]
  end
end
