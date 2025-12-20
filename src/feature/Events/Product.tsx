import { useState } from "react";
import Navbar from "../Navbar";
interface productItem {
    id : number;
    name: string;
    href:string;
    imageSrc:string;
    imageAlt:string;
    price:string;
    color:string;

}
const products:productItem[] = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '$35',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Artwork Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '$35',
    color: 'Iso Dots',
  },
  {
    id: 5,
    name: 'Artwork Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '$35',
    color: 'Iso Dots',
  },
]
export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  // ฟังก์ชันหลักในการกรอง
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
     return (
    
    <div className="bg-white">
        <Navbar onSearch={(value) => setSearchTerm(value)} />
      <div className=" mx-auto max-w-full px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className=" border-b  border-gray-200 justify-between flex  items-center mb-5 pb-3">
        <h2 className="text-[24px]  tracking-tight text-[#666666]">Please enjoy your <span className="text-blue-500 font-bold">Shopping time!</span></h2>
      
        </div>
        
        
        <div className=" mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
            <div key={product.id} className="group relative lg:h-full  ">
              <img alt={product.imageAlt} src={product.imageSrc}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))): (
            <p className="col-span-full text-center py-10 text-gray-500">
              No products found matching "{searchTerm}"
            </p>
          )}
        </div>
        
        
      </div>
    </div>
  );
}
