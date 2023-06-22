class Film < ApplicationRecord

  has_many :film_people
  has_many :people, through: :film_people

  has_many :film_planets
  has_many :planets, through: :film_planets
end
