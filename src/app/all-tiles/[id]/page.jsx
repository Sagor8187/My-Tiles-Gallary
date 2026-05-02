import { myproductDetails } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default async function page({params}) {
    const {id}=await params
    const data =await myproductDetails(id)
    
  return (
    <div>
            <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-center">

      {/* IMAGE */}
      <div className="relative w-full h-[420px]">
        <Image
          src={data?.image}
          alt={data?.title || "Tile Image"}
          fill
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* DETAILS */}
      <div>

        <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          {data?.category}
        </span>

        <h1 className="text-4xl font-bold mt-3 text-gray-800">
          {data?.title}
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {data?.description}
        </p>

        {/* INFO */}
        <div className="mt-6 space-y-2 text-gray-700">
          <p><b>Material:</b> {data?.material}</p>
          <p><b>Dimensions:</b> {data?.dimensions}</p>
        </div>

        {/* PRICE */}
        <div className="mt-6 text-3xl font-bold text-green-600">
          {data?.currency} {data?.price}
        </div>

        {/* STOCK */}
        <div className="mt-2">
          {data?.inStock ? (
            <span className="text-green-600 font-semibold">✔ In Stock</span>
          ) : (
            <span className="text-red-500 font-semibold">❌ Out of Stock</span>
          )}
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition">
          <Link href={"/all-tiles"}>See other Tiles Details</Link>
        </button>
      </div>
    </div>

    </div>
  )
}
