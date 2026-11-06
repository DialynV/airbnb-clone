export type Listing = {
  id: string;
  title: string;
  city: string;
  section: string;
  price: number;
  nights: number;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  image: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  hostName: string;
  hostYears: number;
  description: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Guest suite in Batangas",
    city: "Batangas",
    section: "Batangas",
    price: 2672,
    nights: 2,
    rating: 4.9,
    reviewCount: 48,
    isGuestFavorite: true,
    image: "https://picsum.photos/seed/airbnb1/600/600",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    hostName: "Carla",
    hostYears: 4,
    description:
      "A quiet guest suite close to the port, perfect for a short getaway.",
  },
  {
    id: "2",
    title: "Apartment in Batangas",
    city: "Batangas",
    section: "Batangas",
    price: 2557,
    nights: 2,
    rating: 4.98,
    reviewCount: 61,
    isGuestFavorite: true,
    image: "https://picsum.photos/seed/airbnb2/600/600",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    hostName: "Marco",
    hostYears: 6,
    description: "Bright apartment with a private balcony and fast Wi-Fi.",
  },
  {
    id: "3",
    title: "Condo in Batangas",
    city: "Batangas",
    section: "Batangas",
    price: 3100,
    nights: 2,
    rating: 4.85,
    reviewCount: 22,
    isGuestFavorite: false,
    image: "https://picsum.photos/seed/airbnb3/600/600",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    hostName: "Liza",
    hostYears: 2,
    description: "Modern condo with a pool, a short drive from the beach.",
  },
  {
    id: "4",
    title: "Condo in Mandaluyong",
    city: "Mandaluyong",
    section: "Mandaluyong",
    price: 3450,
    nights: 2,
    rating: 4.92,
    reviewCount: 105,
    isGuestFavorite: true,
    image: "https://picsum.photos/seed/airbnb4/600/600",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    hostName: "Paolo",
    hostYears: 5,
    description: "Cozy condo walking distance to the malls and the MRT.",
  },
  {
    id: "5",
    title: "Loft in Mandaluyong",
    city: "Mandaluyong",
    section: "Mandaluyong",
    price: 2980,
    nights: 2,
    rating: 4.87,
    reviewCount: 73,
    isGuestFavorite: true,
    image: "https://picsum.photos/seed/airbnb5/600/600",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    hostName: "Bea",
    hostYears: 3,
    description: "Industrial-style loft with a brick wall and city views.",
  },
  {
    id: "6",
    title: "Home in Edmonton",
    city: "Edmonton, Canada",
    section: "Mandaluyong",
    price: 36164,
    nights: 2,
    rating: 4.78,
    reviewCount: 152,
    isGuestFavorite: true,
    image: "https://picsum.photos/seed/airbnb6/600/600",
    guests: 16,
    bedrooms: 6,
    beds: 9,
    baths: 2.5,
    hostName: "Tom",
    hostYears: 9,
    description: "Spacious family home with AC, great for big groups.",
  },
];
