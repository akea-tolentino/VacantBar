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
1. In order to share data from the backend with the frontend I use JBuilder to create a flat slice of state that uniformly organizes the data I need for a given object. In the code below, I use Active Record Associations to access the information about a bars reviews through it's association `reviews_left` . I use this data to determine the number of reviews a bar has, and the average of the reviews left. I chose this snippet to showcase because I like to have very structured, readable code and I feel like this is a good reflection of how I like to write my code. 

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

2. Using the Google Maps API, I needed to pass in the latitude and longitude of a location to render that location on the map. In order to accomplish this, I used Google's Geocoder library to pass in an address string and receive back an object containing the latitude, longitude, and the address (broken up into different, identifiable components such as Metro, Street, etc). I used the latitude and longitude keys from this object to set the Geolocation useState variable, which is later passed into the map. This code is wrapped in a useEffect with the `bar.address` as a dependency so that any time the address changes, the Geolocation information for that address is set and the Map object is rerendered with the new Geolocation data. I chose to display this snippet of code because it was my first time working with Google Maps API or the Geocoder library. The Geocoder library was more complicated than I expected it to be at first, and  figuring out how to properly incorporate the two into my code was very rewarding. 

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
