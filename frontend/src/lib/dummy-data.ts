import type { Trip } from "@/types/trip";

export const trips_data: Trip[] = [
    {
        "id": 1,
        "slug": "himalayan-adventure",
        "title": "Himalayan Adventure",
        "location": "Nepal",
        "duration": 14,
        "rating": 4.8,
        "price": 25000,
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
        "shortDescription": "A two-week trek through the heart of the Himalayas.",
        "difficulty": "Challenging",
        "groupSize": "10-15",
        "inclusions": ["Guide", "Meals", "Permits"],
        "exclusions": ["Flights", "Insurance"],
        "gallery": [
            "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=1200&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop",
        ],
        "itinerary": [
            {"day": 1, "title": "Arrive & Briefing", "description": "Meet the crew and prep for the trek."},
            {"day": 2, "title": "Acclimatization", "description": "Light hike and gear check."},
        ],
        "reviews": [
            {"id": 1, "name": "Aditi", "rating": 4.8, "comment": "Spectacular views and great guides!"}
        ],
    },
    {
        "id": 2,
        "slug": "sahara-desert-expedition",
        "title": "Sahara Desert Expedition",
        "location": "Morocco",
        "duration": 7,
        "rating": 4.9,
        "price": 18000,
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop",
        "shortDescription": "Ride the dunes and sleep under the stars.",
        "difficulty": "Moderate",
        "groupSize": "8-12",
    },
    {
        "id": 3,
        "slug": "amazon-rainforest-discovery",
        "title": "Amazon Rainforest Discovery",
        "location": "Brazil",
        "duration": 10,
        "rating": 4.7,
        "price": 22000,
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
        "shortDescription": "Explore the jungle with local naturalists.",
        "difficulty": "Moderate",
        "groupSize": "10-20",
    },
];

export const testimonials_data = [
    {
        "id": 1,
        "quote": "\"An unforgettable journey! The attention to detail and the amazing guides made this the trip of a lifetime.\"",
        "avatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop",
        "name": "Jane Doe",
        "title": "Solo Traveler",
    },
    {
        "id": 2,
        "quote": "\"WanderTips exceeded all my expectations. The Sahara trip was magical. Highly recommended!\"",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
        "name": "John Smith",
        "title": "Adventurer",
    },
    {
        "id": 3,
        "quote": "\"The best travel agency I have ever used. The team is professional, friendly, and knowledgeable.\"",
        "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80&auto=format&fit=crop",
        "name": "Emily White",
        "title": "Family Traveler",
    },
];
