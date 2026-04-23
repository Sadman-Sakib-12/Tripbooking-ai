export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  amenities: string[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "California Sunset Budget Hotel",
    location: "Los Angeles, USA",
    image: "https://i.ibb.co.com/4nxb8LmF/a071b2699488c0e4db5217d42460bed5bca7d4ff.png",
    pricePerNight: 46.25,
    rating: 4,
    reviews: 340,
    amenities: ["Pool", "Spa", "WiFi", "Breakfast"],
  },
  {
    id: 2,
    name: "NYC Grand Tasting Hotel",
    location: "New York, USA",
    image: "https://i.ibb.co.com/0VV4BVS9/f8c1b214ef371c50fcbe067544e6e25f0f5001c8.png",
    pricePerNight: 81.51,
    rating: 5,
    reviews: 215,
    amenities: ["Restaurant", "Bar", "WiFi", "Gym"],
  },
  {
    id: 3,
    name: "Grand Canyon Horseshoe Hotel",
    location: "Arizona, USA",
    image: "https://i.ibb.co.com/4nxb8LmF/a071b2699488c0e4db5217d42460bed5bca7d4ff.png",
    pricePerNight: 55.4,
    rating: 5,
    reviews: 412,
    amenities: ["WiFi", "Breakfast", "Rooftop", "Gym"],
  },
  {
    id: 4,
    name: "California Sunset Twilight Resort",
    location: "San Francisco, USA",
    image: "https://i.ibb.co.com/6RdpgRcG/9f9c5b5bf418ae2c431fad8a69babd94696a7b36.png",
    pricePerNight: 46.25,
    rating: 4,
    reviews: 189,
    amenities: ["Pool", "Sea View", "WiFi", "Breakfast"],
  },
];
