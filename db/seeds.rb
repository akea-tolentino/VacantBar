# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  # movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
 # Create one user with an easy to remember username, email, and password:

 User.create!(
  fname: 'Demo',
  lname: 'lition',
  phone: '5555555555',
  username: 'Demo-lition', 
  email: 'demo@user.io',
  password: 'password'
)

bars = Bar.create([
  { name: "Dan Sung Sa", 
  address: "2775 Telegraph Ave, Oakland, CA 94612", 
  description: "Late-night, wood-clad eatery offering Korean street fare such as corn cheese & spicy fried chicken", 
  bar_type: "korean-eatery", 
  price: 2, 
  capacity: 100 
  }, 

  { name: "Viridian", 
  address: "2216 Broadway, Oakland, CA 94612", 
  description: "Innovative cocktails & a menu of contemporary Asian-inspired food & desserts in a stylish locale.", 
  bar_type: "cocktail", 
  price: 2, 
  capacity: 60 
  }, 
  
  { name: "Hanshin Pocha", 
  address: "4869 Telegraph Ave, Oakland, CA 94609", 
  description: "Late-night, soju pub inspired by pocha, street vendors that originally served food out of covered wagons in Korea.", 
  bar_type: "korean-eatery", 
  price: 2, 
  capacity: 100 
  }
])