import Searchproduct from "@/component/Searchproduct"
import { myproduct } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default async function Alltilespage() {
     const data = await myproduct()
  return (
    <div>
        <div className="my-5 mx-5">
            <Searchproduct></Searchproduct>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {data.map((item) => (
                <div
                  key={item.id}
                  className=" rounded-lg shadow-md overflow-hidden bg-white"
                >
                  {/* Image */}
                  <Image width={400} height={400}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
        
                  {/* Content */}
                  <div className="p-4 space-y-2">
                    {/* Title */}
                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>
        
                    {/* Price */}
                    <p className="text-gray-600">
                      Price: ${item.price}
                    </p>
        
                    {/* Stock */}
                    <p
                      className={`text-sm font-medium ${
                        item.inStock ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
        
                    {/* Button */}
                    <button className="w-full mt-3  bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition">
              <Link href={`/all-tiles/${item.id}`}>View Details</Link>
            </button>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}
