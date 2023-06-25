require "open-uri"

User.destroy_all
Bar.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('bars')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

 User.create!(
  fname: 'Demo',
  lname: 'lition',
  phone: '5555555555',
  username: 'Demo-lition', 
  email: 'demo@user.io',
  password: 'password'
)

 User.create!(
  fname: 'New',
  lname: 'User',
  phone: '5555555555',
  username: 'New User', 
  email: 'new@user.io',
  password: 'password'
)

 User.create!(
  fname: 'Old',
  lname: 'User',
  phone: '5555555555',
  username: 'Old User', 
  email: 'old@user.io',
  password: 'password'
)

 User.create!(
  fname: 'Akea',
  lname: 'Tolentino',
  phone: '5555555555',
  username: 'akea-tolentino', 
  email: 'akea@user.io',
  password: 'password'
)

 User.create!(
  fname: 'Jane',
  lname: 'Doe',
  phone: '5555555555',
  username: 'jane-doe', 
  email: 'jane@user.io',
  password: 'password'
)

 User.create!(
  fname: 'John',
  lname: 'Smith',
  phone: '5555555555',
  username: 'john-smith', 
  email: 'john@user.io',
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

  Review.create!(
    author_id: 1,
    bar_id: 1,
    body: "Place didn't make a good cocktail. Too dark.",
    rating: 1
  )

  Review.create!(
    author_id: 1,
    bar_id: 2,
    body: "Cocktails were great but overpriced. Too cramped. ",
    rating: 2
  )

  Review.create!(
    author_id: 1,
    bar_id: 3,
    body: "Cocktails weren't great. Food was too spicy. Too loud.",
    rating: 1
  )

  Review.create!(
    author_id: 3,
    bar_id: 1,
    body: "Soju cocktails were excellent. Food was comforting.",
    rating: 5
  )

  Review.create!(
    author_id: 3,
    bar_id: 2,
    body: "Cocktails were interesting and fun. Food was innovative and tasty.",
    rating: 5
  )

  Review.create!(
    author_id: 3,
    bar_id: 3,
    body: "Great selection of Korean liquor. Food was tasty, but a bit spicy. Large portions meant for sharing.",
    rating: 4
  )

  Review.create!(
    author_id: 2,
    bar_id: 1,
    body: "Drinks were tasty but a bit sugary. Food was tasty but a bit messy.",
    rating: 3
  )

  Review.create!(
    author_id: 2,
    bar_id: 2,
    body: "Expensive, but arguably worth the price. Cocktails were tasty. Food was yummy.",
    rating: 4
  )

  Review.create!(
    author_id: 2,
    bar_id: 3,
    body: "Drinks were priced at a good value. Food was spicy and quite messy.",
    rating: 3
  )
