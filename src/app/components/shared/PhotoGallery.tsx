'use client'

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

const categories = [
  'All',
  'Me',
  'Sea',
  'Friends',
  'Events',
  'Nature',
  'Tech',
  'Cats',
  'Food',
  'Explore',
  'Meme'
];

const photos: Photo[] = [
  {
    id: 1,
    src: '/content/photos/photo1.webp',
    alt: 'Sea Waves',
    width: 1920,
    height: 1080,
    category: 'Sea'
  },
  {
    id: 2,
    src: '/content/photos/photo2.webp',
    alt: 'Cirrocumulus Clouds',
    width: 1600,
    height: 1067,
    category: 'Nature'
  },
  {
    id: 3,
    src: '/content/photos/photo3.webp',
    alt: 'OMW to Hawksbay',
    width: 1800,
    height: 1200,
    category: 'Explore'
  },
  {
    id: 4,
    src: '/content/photos/photo4.webp',
    alt: 'Somewhere in KDA Scheme',
    width: 1500,
    height: 1000,
    category: 'Explore'
  },
  {
    id: 5,
    src: '/content/photos/photo5.webp',
    alt: 'Hawksbay Beach',
    width: 2000,
    height: 1333,
    category: 'Sea'
  },
  {
    id: 6,
    src: '/content/photos/photo6.webp',
    alt: 'Hawksbay Beach',
    width: 1600,
    height: 1067,
    category: 'Sea'
  },
  {
    id: 7,
    src: '/content/photos/photo7.webp',
    alt: 'Hawksbay Beach',
    width: 1920,
    height: 1280,
    category: 'Sea'
  },
  {
    id: 8,
    src: '/content/photos/photo8.webp',
    alt: 'Hot day at Hill Park',
    width: 1800,
    height: 1200,
    category: 'Explore'
  },
  {
    id: 9,
    src: '/content/photos/photo9.webp',
    alt: 'Hill Park at Night', 
    width: 1600,
    height: 1067,
    category: 'Explore'
  },
  {
    id: 10,
    src: '/content/photos/photo10.webp',
    alt: 'Green Lake at Hill Park',
    width: 2000,
    height: 1333,
    category: 'Explore'
  },
  {
    id: 11,
    src: '/content/photos/photo11.webp',
    alt: 'A small river at Clifton Beach',
    width: 1920,
    height: 1280,
    category: 'Explore'
  },
  {
    id: 12,
    src: '/content/photos/photo12.webp',
    alt: 'My first calligraphy painting', 
    width: 1500,
    height: 1000,
    category: 'Me'
  },
  {
    id: 13,
    src: '/content/photos/photo13.webp',
    alt: 'Ai generated me',
    width: 1600,
    height: 1067,
    category: 'Me'
  },
  {
    id: 14,
    src: '/content/photos/photo14.webp',
    alt: 'Self Portrait',
    width: 1800,
    height: 1200,
    category: 'Me'
  },
  {
    id: 15,
    src: '/content/photos/photo15.webp',
    alt: 'Laying myself on the grass',
    width: 2000,
    height: 1333,
    category: 'Food'
  }
];

// Update the aspect ratio function
const aspectRatioClass = (width: number, height: number) => {
  const ratio = width / height;
  if (ratio < 0.75) { // Portrait
    return "aspect-[3/4] md:row-span-2 md:col-span-1 h-auto"; // Portrait - spans 2 rows
  } else if (ratio < 0.75) {
    return "aspect-[3/4] row-span-2 md:col-span-1"; // Portrait - spans 2 rows, 1 column
  }
  return "aspect-[4/3] md:row-span-1"; // Standard
};

export default function PhotoGallery() {
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredPhotos = useMemo(() => 
    currentCategory === 'All' 
      ? photos 
      : photos.filter(photo => photo.category === currentCategory),
    [currentCategory]
  );

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      
      switch (e.key) {
        case 'ArrowLeft':
          if (currentIndex > 0) {
            setSelectedPhoto(filteredPhotos[currentIndex - 1]);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < filteredPhotos.length - 1) {
            setSelectedPhoto(filteredPhotos[currentIndex + 1]);
          }
          break;
        case 'Escape':
          setSelectedPhoto(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPhoto]);

  const navigate = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  };

  return (
    <>
      {/* Category filter section */}
      <div className={`
        sticky ${isHeaderVisible ? 'top-16' : 'top-0'} 
        z-20 -mx-4 px-4 py-4 
        bg-white/95 backdrop-blur-lg shadow-sm
        transition-all duration-300
      `}>
        <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`
                px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                ${currentCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div 
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          auto-rows-[minmax(200px,_1fr)] grid-flow-dense 
          gap-2 sm:gap-3 md:gap-4 mt-6"
      >
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className={`
              relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100 
              shadow-sm hover:shadow-md transition-all duration-300
              ${aspectRatioClass(photo.width, photo.height)}
            `}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={`(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) ${photo.width / photo.height < 0.75 ? '100vw' : '33vw'}, (max-width: 1024px) ${photo.width / photo.height < 0.75 ? '50vw' : '25vw'}, ${photo.width / photo.height < 0.75 ? '33vw' : '20vw'}`}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading={index < 8 ? "eager" : "lazy"}
              priority={index < 8}
              quality={100} // Maximum quality for all images
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${photo.width} ${photo.height}">
                  <rect width="100%" height="100%" fill="#F3F4F6"/>
                </svg>`
              ).toString('base64')}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <div className="text-white">
                <h3 className="text-sm font-medium">{photo.alt}</h3>
                <p className="text-xs opacity-75">{photo.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              disabled={filteredPhotos.indexOf(selectedPhoto) === 0}
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigate('next')}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              disabled={filteredPhotos.indexOf(selectedPhoto) === filteredPhotos.length - 1}
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Image container */}
            <div className="relative max-w-[90vw] max-h-[90vh]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
                </div>
              )}
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                className="object-contain max-h-[90vh]"
                onLoadingComplete={() => setIsLoading(false)}
                quality={100}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg font-medium">{selectedPhoto.alt}</h3>
                <p className="text-white/75 text-sm">{selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}