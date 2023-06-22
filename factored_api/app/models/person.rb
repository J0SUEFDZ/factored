class Person < ApplicationRecord
  belongs_to :homeworld, class_name: 'Planet', foreign_key: 'homeworld_id'

  has_many :film_people
  has_many :films, through: :film_people
end
