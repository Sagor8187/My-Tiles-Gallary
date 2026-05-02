export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg shadow-md overflow-hidden bg-white animate-pulse"
        >
          {/* IMAGE SKELETON */}
          <div className="w-full h-48 bg-gray-300" />

          {/* CONTENT */}
          <div className="p-4 space-y-3">

            {/* TITLE */}
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>

            {/* PRICE */}
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>

            {/* STOCK */}
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>

            {/* BUTTON */}
            <div className="h-10 bg-gray-300 rounded mt-4"></div>

          </div>
        </div>
      ))}

    </div>
  );
}