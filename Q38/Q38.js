"use strict";
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}`);
}
// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris"); // Using the default country
describe_city("New York", "USA");
