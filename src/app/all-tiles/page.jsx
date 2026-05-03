"use client";

import Myloading from "@/component/common/Myloading";
import "animate.css";
import { myproduct } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default  function Alltilespage() {
  const [search, setsearch] = useState("");
   const [data, setData] = useState([]);

   const [loading,setloading] = useState(false)
   
 
  useEffect(() => {
  const loadData = async () => {
    setloading(true);

    const res = await myproduct();
    setData(res);

    setloading(false);
  };

  loadData();
}, []);

 const filterdata = data.filter(item =>
  item.title.toLowerCase().includes(search.toLowerCase())
);
  
  return (
    <div className="animate__animated animate__zoomIn">
      <div className="my-5 mx-5">
        <div className="join">
          <div>
            <label className="input validator join-item">
              <input
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                type="text"
                placeholder="Search by Product Title "
                required
              />
            </label>
          </div>
          <button onChange={(e) => setsearch(e.target.value)} className="btn btn-neutral join-item">
            Search
          </button>
        </div>
      </div>
      {loading?<Myloading></Myloading>:<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filterdata.map((item) => (
          <div
            key={item.id}
            className=" rounded-lg shadow-md overflow-hidden bg-white"
          >
            {/* Image */}
            <Image
              width={400}
              height={400}
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title */}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <h2 className="text-md text-gray-600 font-semibold">
                Category : {item.category}
              </h2>

              {/* Price */}
              <p className="text-gray-600">Price: ${item.price}</p>

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
      </div>}
    </div>
  );
}
