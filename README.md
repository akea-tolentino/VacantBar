# VacantBar

[VacantBar](https://vacant-bar.onrender.com/) is a clone of [OpenTable](https://www.opentable.com/), a web application that allows users to find, book reservations, and leave reviews for nearby restaurants that exist on the platform.

## Overview

VacantBar users will be able to:
- Create/Login to an account
- Login with a demo user
- Search for Bars that are seeded into the platform by name, type, or location

Logged-in user will be able to:
- Create, Update and Delete Reservations for bars that belong to them
- Create, Update and Delete Reviews for bars that belong to them

## Libraries and APIs Used
- React.js
- Redux
- Ruby on Rails
- HTML5
- CSS
- PostgreSQL
- Google Maps API

VacantBar is built using Ruby on Rails for the backend with PostgreSQL as the database. The frontend is comprised of React.js and Redux to create a dynamic single page web application that does not require refreshing the page to render changes made to the database.

## Code Highlights
1. JBuilder

```ruby
json.bar do
    json.extract! @bar, 
    :id, 
    :name, 
    :description, 
    :bar_type, 
    :address, 
    :price, 
    :capacity

    json.imageUrls @bar.images.map { |file| file.url }
    reviews = @bar.reviews_left
    average_rating = reviews.average(:rating) if reviews.any?
    num_reviews = reviews.count if reviews.any?

    json.averageRating average_rating
    json.numReviews num_reviews
end
```

2. UseEffect and Google Geocoder API

```javascript
useEffect(() => {
        const address = bar.address;
        geocoder.geocode({ address: address }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
            const location = results[0].geometry.location;
            setGeolocation({
                lat: location.lat(),
                lng: location.lng()
             });
        }});
    }, [bar.address]);
```


## Future Bonus Features
- Tags to assign to bars, allowing them to be filtered by categories
- Directions provided by Google Maps
