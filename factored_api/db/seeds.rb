Film.destroy_all
Planet.destroy_all
Person.destroy_all

FilmPerson.delete_all
FilmPlanet.delete_all

load(Rails.root.join('db', 'seeds', 'film.rb'))
load(Rails.root.join('db', 'seeds', 'planet.rb'))
load(Rails.root.join('db', 'seeds', 'person.rb'))

load(Rails.root.join('db', 'seeds', 'film_person.rb'))
load(Rails.root.join('db', 'seeds', 'film_planet.rb'))
