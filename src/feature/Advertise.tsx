import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import '../App.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Adslide {
    id : number;
    title: string;
    description:string;
    image:string;
    cta:string;
}
const ads: Adslide[] = [
    {   id:1,
        title:"Sell 50%",
        description: "every Friday product sell 50%",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTc2NjExMzIwM3ww&ixlib=rb-4.1.0&fit=max&q=80",
        cta:"Let's shop"
    },
    {   id:2,
        title:"sign up for coupon free delivery",
        description: "Promotion for members",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxwcm9kdWN0fGVufDB8fHx8MTc2NjExMzIwM3ww&ixlib=rb-4.1.0&fit=max&q=80",
        cta:"Register"
    },
    {   id:3,
        title:"Buy 10 items to get a 30% discount.",
        description: "Expires at the end of the month",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw4fHxwcm9kdWN0fGVufDB8fHx8MTc2NjExMzIwM3ww&ixlib=rb-4.1.0&fit=max&q=80",
        cta:"Let's shop"
    }
]
const Advertise = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 px-4 group">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
                nextEl: 'button next',
                prevEl: 'button prev',
            }}
            pagination={{clickable:true, dynamicBullets:true}}
            autoplay={{delay: 5000, disableOnInteraction: false}}
            loop={true}
            className="rounded-2xl overflow-hidden shadow-xl"
            
        >
            {ads.map((ad) => (
                <SwiperSlide key={ad.id}>
                    <div className="relative h-[300px] md:h-[450px] w-full">
                    {/* Background Image */}
                    <img 
                        src={ad.image} 
                        alt={ad.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-10 md:px-20 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {ad.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-200">
                  {ad.description}
                </p>
                <button className="w-fit bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full transition-all active:scale-95">
                  {ad.cta}
                </button>
              </div>
                    </div>

                </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons */}
        <button className="button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
          <HiChevronLeft size={30} />
        </button>
        <button className="button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
          <HiChevronRight size={30} />
        </button>
      </Swiper>
      
    {/* Custom Style for Swiper Pagination (Tailwind can't reach some internal Swiper classes easily) */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: white !important;
          width: 20px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </div>
  )
}

export default Advertise
