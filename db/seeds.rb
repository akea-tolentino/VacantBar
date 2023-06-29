require "open-uri"

User.destroy_all
Bar.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('bars')
ApplicationRecord.connection.reset_pk_sequence!('reviews')
ApplicationRecord.connection.reset_pk_sequence!('reservations')

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

  bar4 = Bar.create(
    name: "The Double Standard", 
    address: "2424 Telegraph Ave, Oakland, CA 94612", 
    description: "A full bar & happy hour specials draw crowds to this low-key neighborhood lounge with a large patio.", 
    bar_type: "cocktail", 
    price: 2, 
    capacity: 60 
)

bar4.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/the-double-standard/the_double_standard_1.jpg"),
  filename: "the_double_standard_1.jpg"
  )
bar4.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/the-double-standard/the_double_standard_2.jpg"),
  filename: "the_double_standard_2.jpg"
  )
bar4.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/the-double-standard/the_double_standard_3.jpg"),
  filename: "the_double_standard_3.jpg"
  )
bar4.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/the-double-standard/the_double_standard_4.jpg"),
  filename: "the_double_standard_4.jpg"
  )

  bar5 = Bar.create(
    name: "Low Bar", 
    address: "2300 Webster St, Oakland, CA 94612", 
    description: "Cool Mexican-inflected cocktail spot pairing creative drinks with elevated tacos & churros.", 
    bar_type: "cocktail", 
    price: 2, 
    capacity: 80 
)

bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_1.jpg"),
  filename: "low_bar_1.jpg"
  )
bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_2.jpg"),
  filename: "low_bar_2.jpg"
  )
bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_3.jpg"),
  filename: "low_bar_3.jpg"
  )
bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_4.jpg"),
  filename: "low_bar_4.jpg"
  )
bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_5.jpg"),
  filename: "low_bar_5.jpg"
  )
bar5.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/low-bar/low_bar_6.jpg"),
  filename: "low_bar_6.jpg"
  )

  bar6 = Bar.create(
    name: "Drake's Dealership", 
    address: "2325 Broadway Auto Row, Oakland, CA 94612", 
    description: "Taproom of San Leandro brewery for house beer plus wood-fired pizza & more in former auto-shop digs.", 
    bar_type: "brewery", 
    price: 2, 
    capacity: 120 
)

bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_1.jpg"),
  filename: "drakes_dealership_1.jpg"
  )
bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_2.jpg"),
  filename: "drakes_dealership_2.jpg"
  )
bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_3.jpg"),
  filename: "drakes_dealership_3.jpg"
  )
bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_4.jpg"),
  filename: "drakes_dealership_4.jpg"
  )
bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_5.jpg"),
  filename: "drakes_dealership_5.jpg"
  )
bar6.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/drakes-dealership/drakes_dealership_6.jpg"),
  filename: "drakes_dealership_6.jpg"
  )

  bar7 = Bar.create(
    name: "First Edition", 
    address: "1915 Broadway, Oakland, CA 94612", 
    description: "A comic book-themed cocktail den with moody lighting, high ceilings, large murals & outdoor tables.", 
    bar_type: "cocktail", 
    price: 2, 
    capacity: 80 
)

bar7.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/first-edition/first_edition_1.jpg"),
  filename: "first_edition_1.jpg"
  )
bar7.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/first-edition/first_edition_2.jpg"),
  filename: "first_edition_2.jpg"
  )
bar7.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/first-edition/first_edition_3.jpg"),
  filename: "first_edition_3.jpg"
  )
bar7.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/first-edition/first_edition_4.jpg"),
  filename: "first_edition_4.jpg"
  )
bar7.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/first-edition/first_edition_5.jpg"),
  filename: "first_edition_5.jpg"
  )

  bar8 = Bar.create(
    name: "Kaiyo", 
    address: "701 3rd St, San Francisco, CA 94105", 
    description: "Upscale bar with a tropical theme, serving Japanese & Peruvian bites, plus cocktails.", 
    bar_type: "rooftop", 
    price: 2, 
    capacity: 80 
)

bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_1.jpg"),
  filename: "kaiyo_1.jpg"
  )
bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_2.jpg"),
  filename: "kaiyo_2.jpg"
  )
bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_3.jpg"),
  filename: "kaiyo_3.jpg"
  )
bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_4.jpg"),
  filename: "kaiyo_4.jpg"
  )
bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_5.jpg"),
  filename: "kaiyo_5.jpg"
  )
bar8.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/kaiyo/kaiyo_6.jpg"),
  filename: "kaiyo_6.jpg"
  )

  bar9 = Bar.create(
    name: "Telegraph Beer Garden", 
    address: "2318 Telegraph Ave, Oakland, CA 94612", 
    description: "Bustling, dog-friendly beer garden hangout with a variety of grilled eats & a relaxed outdoor patio.", 
    bar_type: "brewery", 
    price: 2, 
    capacity: 100 
)

bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_1.jpg"),
  filename: "telegraph_beer_garden_1.jpg"
  )
bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_2.jpg"),
  filename: "telegraph_beer_garden_2.jpg"
  )
bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_3.jpg"),
  filename: "telegraph_beer_garden_3.jpg"
  )
bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_4.jpg"),
  filename: "telegraph_beer_garden_4.jpg"
  )
bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_5.jpg"),
  filename: "telegraph_beer_garden_5.jpg"
  )
bar9.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/telegraph-beer-garden/telegraph_beer_garden_6.jpg"),
  filename: "telegraph_beer_garden_6.jpg"
  )

  bar10 = Bar.create(
    name: "Fort Point", 
    address: "742 Valencia St, San Francisco, CA 94110", 
    description: "Neon lights & bold colors outfit this lively beer hall serving craft beers & playful shared plates.", 
    bar_type: "brewery", 
    price: 2, 
    capacity: 80 
)

bar10.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/fort-point/fort_point_1.jpg"),
  filename: "fort_point_1.jpg"
  )
bar10.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/fort-point/fort_point_2.jpg"),
  filename: "fort_point_2.jpg"
  )
bar10.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/fort-point/fort_point_3.jpg"),
  filename: "fort_point_3.jpg"
  )
bar10.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/fort-point/fort_point_4.jpg"),
  filename: "fort_point_4.jpg"
  )
bar10.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/fort-point/fort_point_5.jpg"),
  filename: "fort_point_5.jpg"
  )

  bar11 = Bar.create(
    name: "Ballast Point", 
    address: "705 16th St, San Francisco, CA 94158", 
    description: "Contemporary brewery & pub providing acclaimed beers on tap, refined bar fare & to-go kegs.", 
    bar_type: "brewery", 
    price: 2, 
    capacity: 120 
)

bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_1.jpg"),
  filename: "ballast_point_1.jpg"
  )
bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_2.jpg"),
  filename: "ballast_point_2.jpg"
  )
bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_3.jpg"),
  filename: "ballast_point_3.jpg"
  )
bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_4.jpg"),
  filename: "ballast_point_4.jpg"
  )
bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_5.jpg"),
  filename: "ballast_point_5.jpg"
  )
bar11.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/ballast-point/ballast_point_6.jpg"),
  filename: "ballast_point_6.jpg"
  )

  bar12 = Bar.create(
    name: "Blind Tiger", 
    address: "2600 Telegraph Ave, Oakland, CA 94612", 
    description: "Comfy, cozy basement tavern for Asian Fusion shared plates & drinks plus happy hours.", 
    bar_type: "cocktail", 
    price: 2, 
    capacity: 80 
)

bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_1.jpg"),
  filename: "blind_tiger_1.jpg"
  )
bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_2.jpg"),
  filename: "blind_tiger_2.jpg"
  )
bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_3.jpg"),
  filename: "blind_tiger_3.jpg"
  )
bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_4.jpg"),
  filename: "blind_tiger_4.jpg"
  )
bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_5.jpg"),
  filename: "blind_tiger_5.jpg"
  )
bar12.images.attach(io: URI.open(
  "https://vacant-bar-seeds.s3.us-west-1.amazonaws.com/blind-tiger/blind_tiger_6.jpg"),
  filename: "blind_tiger_6.jpg"
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

  Review.create!(
    author_id: 3,
    bar_id: 12,
    body: "Drinks were okay but the food was great.",
    rating: 3
  )

  Review.create!(
    author_id: 4,
    bar_id: 11,
    body: "Excellent selection of beer!",
    rating: 5
  )

  Review.create!(
    author_id: 5,
    bar_id: 10,
    body: "Great selection of beers, solid food.",
    rating: 4
  )

  Review.create!(
    author_id: 6,
    bar_id: 9,
    body: "Decent collection of beers, good food.",
    rating: 4
  )

  Review.create!(
    author_id: 6,
    bar_id: 12,
    body: "Drinks were very interesting, food was okay.",
    rating: 4
  )

  Review.create!(
    author_id: 5,
    bar_id: 7,
    body: "Interesting spot! Comic themed cocktails and decor.",
    rating: 4
  )

  Review.create!(
    author_id: 4,
    bar_id: 6,
    body: "Huge selection of beers, excellent pizzas",
    rating: 5
  )

  Review.create!(
    author_id: 3,
    bar_id: 8,
    body: "Cool, tasty cocktails, great food and an exceptional view. Worth the price.",
    rating: 5
  )

  Review.create!(
    author_id: 4,
    bar_id: 8,
    body: "Great cocktails and a beautiful view.",
    rating: 5
  )

  Review.create!(
    author_id: 2,
    bar_id: 4,
    body: "Great, classy cocktails.",
    rating: 4
  )

  Review.create!(
    author_id: 2,
    bar_id: 5,
    body: "Inventive cocktails and solid food.",
    rating: 4
  )

  Reservation.create!(
    user_id: 1,
    bar_id: 3,
    num_guests: 11,
    date: "Wed, 12 Jul 2023",
    time: "Sat, 01 Jan 2000 18:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 1,
    bar_id: 8,
    num_guests: 9,
    date: "Fri, 14 Jul 2023",
    time: "Sat, 01 Jan 2000 20:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 2,
    bar_id: 2,
    num_guests: 4,
    date: "Wed, 05 Jul 2023",
    time: "Sat, 01 Jan 2000 17:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 2,
    bar_id: 5,
    num_guests: 6,
    date: "Wed, 19 Jul 2023",
    time: "Sat, 01 Jan 2000 18:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 3,
    bar_id: 4,
    num_guests: 2,
    date: "Sat, 15 Jul 2023",
    time: "Sat, 01 Jan 2000 18:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 4,
    bar_id: 2,
    num_guests: 3,
    date: "Tue, 11 Jul 2023",
    time: "Sat, 01 Jan 2000 19:00:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 5,
    bar_id: 10,
    num_guests: 11,
    date: "Wed, 12 Jul 2023",
    time: "Sat, 01 Jan 2000 18:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 6,
    bar_id: 12,
    num_guests: 8,
    date: "Wed, 05 Jul 2023",
    time: "Sat, 01 Jan 2000 20:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 4,
    bar_id: 11,
    num_guests: 1,
    date: "Wed, 26 Jul 2023",
    time: "Sat, 01 Jan 2000 19:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 3,
    bar_id: 9,
    num_guests: 11,
    date: "Wed, 19 Jul 2023",
    time: "Sat, 01 Jan 2000 17:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 2,
    bar_id: 7,
    num_guests: 4,
    date: "Wed, 12 Jul 2023",
    time: "Sat, 01 Jan 2000 18:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 4,
    bar_id: 5,
    num_guests: 2,
    date: "Wed, 19 Jul 2023",
    time: "Sat, 01 Jan 2000 21:30:00.000000000 UTC +00:00"
  )

  Reservation.create!(
    user_id: 5,
    bar_id: 4,
    num_guests: 4,
    date: "Wed, 19 Jul 2023",
    time: "Sat, 01 Jan 2000 22:30:00.000000000 UTC +00:00"
  )