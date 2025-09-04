
"use client";
import { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Link from "next/link";
import UpcomingTripCard from "./UpcomingTripCard";
import { Trip } from "@/types/trip";

const trips_data: Trip[] = [
  {
    "id": 1,
    "slug": "himalayan-adventure",
    "title": "Himalayan Adventure",
    "location": "Nepal",
    "duration": 14,
    "rating": 4.8,
    "price": 25000,
    "originalPrice": 28000,
    "availableDates": ["2025-10-10", "2025-10-24", "2025-11-07"],
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "A two-week trek through the heart of the Himalayas.",
    "difficulty": "Challenging",
    "groupSize": "10-15",
  },
  {
    "id": 2,
    "slug": "sahara-desert-expedition",
    "title": "Sahara Desert Expedition",
    "location": "Morocco",
    "duration": 7,
    "rating": 4.9,
    "price": 18000,
    "originalPrice": 20000,
    "availableDates": ["2025-09-15", "2025-09-29", "2025-10-13"],
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
    "originalPrice": 25000,
    "availableDates": ["2025-11-01", "2025-11-15", "2025-11-29"],
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "Explore the jungle with local naturalists.",
    "difficulty": "Moderate",
    "groupSize": "10-20",
  },
    {
    "id": 4,
    "slug": "meghalaya-backpacking",
    "title": "Meghalaya Backpacking - 6 Days Road Trip",
    "location": "Meghalaya",
    "duration": 6,
    "rating": 4.9,
    "price": 22999,
    "originalPrice": 24999,
    "availableDates": ["2025-09-06", "2025-09-13", "2025-09-20", "2025-09-27", "2025-10-02"],
    "image": "https://images.unsplash.com/photo-1617393094396-d5a8f4ab13a2?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "A road trip through the abode of clouds.",
    "difficulty": "Moderate",
    "groupSize": "10-15",
  },
  {
    "id": 5,
    "slug": "spiti-full-circuit",
    "title": "Spiti Full Circuit - Shimla to Manali",
    "location": "Spiti",
    "duration": 7,
    "rating": 4.8,
    "price": 22999,
    "originalPrice": 25999,
    "availableDates": ["2025-09-05", "2025-09-12", "2025-09-19", "2025-09-26"],
    "image": "https://images.unsplash.com/photo-1588992832800-941d7a3d75e3?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "A thrilling circuit through the cold desert.",
    "difficulty": "Challenging",
    "groupSize": "10-15",
  },
  {
    "id": 6,
    "slug": "spiti-full-circuit",
    "title": "Spiti Full Circuit - Shimla to Manali",
    "location": "Spiti",
    "duration": 7,
    "rating": 4.8,
    "price": 22999,
    "originalPrice": 25999,
    "availableDates": ["2025-09-05", "2025-09-12", "2025-09-19", "2025-09-26"],
    "image": "https://images.unsplash.com/photo-1588992832800-941d7a3d75e3?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "A thrilling circuit through the cold desert.",
    "difficulty": "Challenging",
    "groupSize": "10-15",
  },
];

const locations = ["All", "Meghalaya", "Spiti valley", "Leh", "Russia", "Europe", "Vietnam", "Bali", "Thailand"];



// ... (keep your existing trips_data and locations array)

export default function UpcomingTrips() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const lastScrollTime = useRef(0);
  // Touch gesture helpers
  const startTouchX = useRef(0);
  const startTouchY = useRef(0);
  const isTouchActive = useRef(false);
  const hasTouchDirection = useRef(false);
  const isHorizontalTouchDrag = useRef(false);

  const [springs, api] = useSpring(() => ({
    x: 0,
    config: { 
      tension: 120,
      friction: 30,
      mass: 1
    }
  }));

  // Auto-scroll animation
  const autoScroll = useCallback(() => {
    if (isHovered.current || isDragging.current) {
      animationFrameId.current = requestAnimationFrame(autoScroll);
      return;
    }

    const now = Date.now();
    const deltaTime = now - lastScrollTime.current;
    lastScrollTime.current = now;

    // Calculate new position (1 pixel per frame at 60fps)
    const scrollSpeed = 1; // pixels per frame
    const currentX = typeof springs.x.get === 'function' ? springs.x.get() : springs.x.animation?.toValues?.[0] ?? 0;
    const newX = currentX - (scrollSpeed * (deltaTime / 16.67)); // Normalize to 60fps

    // Get container and content width
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.scrollWidth / 2; // Since we duplicate the items

    // Reset position when scrolled to end
    if (Math.abs(newX) >= contentWidth) {
      api.start({ x: 0, immediate: true });
    } else {
      api.start({ x: newX, immediate: true });
    }

    animationFrameId.current = requestAnimationFrame(autoScroll);
  }, [api, springs.x]);

  // Start auto-scroll on mount
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [autoScroll]);

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    lastScrollTime.current = Date.now();
  };

  // Handle drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startPos.current = e.pageX - (contentRef.current?.offsetLeft || 0);
    scrollLeft.current = springs.x.get();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !contentRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - (contentRef.current.offsetLeft || 0);
    const walk = (x - startPos.current) * 1.5; // Scroll speed multiplier
    api.start({ x: scrollLeft.current + walk, immediate: true });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    lastScrollTime.current = Date.now();
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchActive.current = true;
    hasTouchDirection.current = false;
    isHorizontalTouchDrag.current = false;
    startTouchX.current = e.touches[0].pageX;
    startTouchY.current = e.touches[0].pageY;
    scrollLeft.current = springs.x.get();
  };

  const handleTouchMove = (e: any) => {
    if (!isTouchActive.current || !contentRef.current) return;
    const touch = e.touches && e.touches[0];
    if (!touch) return;

    const dx = touch.pageX - startTouchX.current;
    const dy = touch.pageY - startTouchY.current;

    if (!hasTouchDirection.current) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        hasTouchDirection.current = true;
        isHorizontalTouchDrag.current = Math.abs(dx) > Math.abs(dy);
        isDragging.current = isHorizontalTouchDrag.current;
      }
    }

    if (isHorizontalTouchDrag.current) {
      // Intercept horizontal drags to move the carousel and prevent page scroll
      if (typeof e.preventDefault === 'function') e.preventDefault();
      const walk = dx * 1.5;
      api.start({ x: scrollLeft.current + walk, immediate: true });
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    isTouchActive.current = false;
    hasTouchDirection.current = false;
    isHorizontalTouchDrag.current = false;
    lastScrollTime.current = Date.now();
  };

  // Clean up event listeners
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    // We no longer listen for touchmove on the document to allow natural page scroll
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-6 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-secondary ">Upcoming Trips</h2>
          <Link href="/trips" className="text-primary font-medium hover:underline">
            See All →
          </Link>
        </div >
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 hide-scrollbar">
          {locations.map((loc) => (
            <button 
              key={loc} 
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 whitespace-nowrap transition-colors"
            >
              {loc}
            </button>
          ))}
        </div>
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div 
            ref={contentRef}
            style={springs}
            className="flex gap-4 w-max cursor-grab active:cursor-grabbing touch-pan-y select-none py-2"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {[...trips_data, ...trips_data].map((trip, index) => (
              <UpcomingTripCard key={`${trip.id}-${index}`} trip={trip} />
            ))}
          </animated.div>
        </div>
      </div>
    </section>
  );
}