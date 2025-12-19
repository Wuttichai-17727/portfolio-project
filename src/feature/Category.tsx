// import React from 'react'
import { MdNavigateNext } from "react-icons/md";
interface categoryItem {
  id: number;
  typeItem: string;
  href: string;
  imageSrc: string;
}
const categorys: categoryItem[] = [
  {
    id: 1,
    typeItem: "Shirt",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1740711152088-88a009e877bb?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxMXx8c2hpcnR8ZW58MHx8fHwxNzY2MTI1MTk0fDA&ixlib=rb-4.1.0&fit=max&q=80",
  },
  {
    id: 2,
    typeItem: "Pant",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw1fHxwYW50fGVufDB8fHx8MTc2NjEyNTMwN3ww&ixlib=rb-4.1.0&fit=max&q=80",
  },
  {
    id: 3,
    typeItem: "Sneaker",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxHbGFzc2VzfGVufDB8fHx8MTc2NjEyNTM5OHww&ixlib=rb-4.1.0&fit=max&q=80",
  },
  {
    id: 4,
    typeItem: "Glasses",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 5,
    typeItem: "Accessories",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxMnx8QWNjZXNzb3JpZXN8ZW58MHx8fHwxNzY2MTI1NDgzfDA&ixlib=rb-4.1.0&fit=max&q=80",
  },
  {
    id: 6,
    typeItem: "Watches",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxMnx8V2F0Y2hlc3xlbnwwfHx8fDE3NjYxMjU1NDV8MA&ixlib=rb-4.1.0&fit=max&q=80",
  },
];
const Category = () => {
  return (
    <div className="bg-white ">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="flex items-center border-b-1  border-gray-200 mb-5 justify-between">
          <h2 className=" text-[24px] tracking-tight text-[#666666] mb-5 ">
            Shop From <span className="text-blue-500">Top Categories</span></h2>
            <div className="flex">
              <a
                className="text-[18px]  tracking-tight text-black-400"
                href="#"
              >
                View All
              </a>
              <MdNavigateNext className="text-[#008ECC]  sm:size-6" />
            </div>
          
        </div>

        <div className=" flex justify-between item-center  ">
          {categorys.map((category) => (
            <div key={category.id}>
              <a href={category.href}>
                <img
                  className="rounded-full  w-20 h-20 overflow-hidden hover:border border-sky-500"
                  src={category.imageSrc}
                  alt=""
                />
                <div className="flex justify-center">{category.typeItem}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
