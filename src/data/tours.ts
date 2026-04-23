export interface Tour {
  id: number;
  title: string;
  destination: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "California Sunset Twilight Boat Cruise",
    destination: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=350&fit=crop",
    price: 45.25,
    duration: "3 Hours",
    rating: 4,
    reviews: 128,
    category: "Cruise",
  },
  {
    id: 2,
    title: "NYC Food Tasting and Culture Tour",
    destination: "New York, USA",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&h=350&fit=crop",
    price: 31.25,
    duration: "4 Hours",
    rating: 5,
    reviews: 95,
    category: "Food",
  },
  {
    id: 3,
    title: "Grand Canyon Helicopter Skydiving",
    destination: "Arizona, USA",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=500&h=350&fit=crop",
    price: 55.25,
    duration: "Full Day",
    rating: 5,
    reviews: 210,
    category: "Adventure",
  },
  {
    id: 4,
    title: "Bali Cultural Heritage Experience",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&h=350&fit=crop",
    price: 38.0,
    duration: "5 Hours",
    rating: 4,
    reviews: 76,
    category: "Cultural",
  },
  {
    id: 5,
    title: "Paris City Highlights Walking Tour",
    destination: "Paris, France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&h=350&fit=crop",
    price: 42.5,
    duration: "3 Hours",
    rating: 5,
    reviews: 189,
    category: "City",
  },
];
