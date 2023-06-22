# In a Rails console or a script file

# Define the data as an array of arrays
film_planet_data = [
  [1, 1],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 1],
  [2, 6],
  [3, 1],
  [4, 2],
  [5, 2],
  [5, 3],
  [5, 6],
  [6, 2],
  [7, 3],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [9, 3],
  [9, 4],
  [9, 5],
  [9, 6],
  [10, 5],
  [11, 5],
  [12, 6],
  [13, 6],
  [14, 6],
  [15, 6],
  [16, 6],
  [17, 6],
  [18, 6],
  [19, 6],
  [27, 2]
]

# Insert the data into the FilmPlanet table
film_planet_data.each do |data|
  FilmPlanet.create!(planet_id: data[0], film_id: data[1])
end

p "Created #{FilmPlanet.count} FilmPlanet"
