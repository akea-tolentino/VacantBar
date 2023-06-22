require "open-uri"

User.destroy_all
Bar.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('bars')

 User.create!(
  fname: 'Demo',
  lname: 'lition',
  phone: '5555555555',
  username: 'Demo-lition', 
  email: 'demo@user.io',
  password: 'password'
)

bar1 = Bar.create(
  name: "Dan Sung Sa", 
  address: "2775 Telegraph Ave, Oakland, CA 94612", 
  description: "Late-night, wood-clad eatery offering Korean street fare such as corn cheese & spicy fried chicken", 
  bar_type: "korean-eatery", 
  price: 2, 
  capacity: 100 
)

bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_1.jpeg"),
  filename: "dan_sung_sa_1.jpg"
  )
bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_2.jpeg"),
  filename: "dan_sung_sa_2.jpg"
  )
bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_3.jpeg"),
  filename: "dan_sung_sa_3.jpg"
  )
bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_4.jpeg"),
  filename: "dan_sung_sa_4.jpg"
  )
bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_5.jpeg"),
  filename: "dan_sung_sa_5.jpg"
  )
bar1.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/dan-sung-sa/dan_sung_sa_6.jpeg"),
  filename: "dan_sung_sa_6.jpg"
  )


bar2 = Bar.create(
  name: "Viridian", 
  address: "2216 Broadway, Oakland, CA 94612", 
  description: "Innovative cocktails & a menu of contemporary Asian-inspired food & desserts in a stylish locale.", 
  bar_type: "cocktail", 
  price: 2, 
  capacity: 60 
)

bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_1.jpeg"),
  filename: "viridian_1.jpg"
  )
bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_2.jpeg"),
  filename: "viridian_2.jpg"
  )
bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_3.jpeg"),
  filename: "viridian_3.jpg"
  )
bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_4.jpeg"),
  filename: "viridian_4.jpg"
  )
bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_5.jpeg"),
  filename: "viridian_5.jpg"
  )
bar2.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/viridian/viridian_6.jpeg"),
  filename: "viridian_6.jpg"
  )

  bar3 = Bar.create(
    name: "Hanshin Pocha", 
    address: "4869 Telegraph Ave, Oakland, CA 94609", 
    description: "Late-night, soju pub inspired by pocha, street vendors that originally served food out of covered wagons in Korea.", 
    bar_type: "korean-eatery", 
    price: 2, 
    capacity: 100 
)

bar3.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/hanshin-pocha/hanshin_pocha_1.jpeg"),
  filename: "hanshin_pocha_1.jpg"
  )
bar3.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/hanshin-pocha/hanshin_pocha_2.jpeg"),
  filename: "hanshin_pocha_2.jpg"
  )
bar3.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/hanshin-pocha/hanshin_pocha_3.jpeg"),
  filename: "hanshin_pocha_3.jpg"
  )
bar3.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/hanshin-pocha/hanshin_pocha_4.jpeg"),
  filename: "hanshin_pocha_4.jpg"
  )
