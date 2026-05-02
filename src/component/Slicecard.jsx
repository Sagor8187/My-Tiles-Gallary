import { myproduct } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default async function Slicecard() {
    const data = await myproduct()
    const output = data.slice(0,4)
    
    

  

  return (
    <div>
        <h1 className="mx-auto text-center text-xl font-bold">Featured Tiles</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {output.map((item) => (
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
            <button className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800">
              <Link href={`/all-tiles/${item.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
