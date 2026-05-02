import Marquee from "react-fast-marquee";

export default function Merque() {
const marqueeData = [ { id: 1, tileName: "Marble Blue Tile", text: "New Arrivals: Marble Blue Tile" },
     { id: 2, tileName: "Modern Geometric Tile", text: "Weekly Feature: Modern Geometric Patterns" }, { id: 3, tileName: "Community Design Tile", text: "Join the Community & Share Your Designs" },
      { id: 4, tileName: "Premium Offer Tile", text: "Special Offer: Up to 30% Off Selected Tiles" }, { id: 5, tileName: "Luxury Ceramic Tile", text: "Trending Now: Luxury Ceramic Collection" }, 
      { id: 6, tileName: "Classic White Tile", text: "New Arrivals: Classic White Elegance" }, 
      { id: 7, tileName: "Stone Texture Tile", text: "Weekly Feature: Natural Stone Texture Design" },
       { id: 8, tileName: "Gold Pattern Tile", text: "Trending Now: Gold Luxury Pattern Series" },
        { id: 9, tileName: "Minimal Gray Tile", text: "New Arrivals: Minimal Gray Modern Style" },
         { id: 10, tileName: "Artistic Mosaic Tile", text: "Featured: Artistic Mosaic Collection" }
        
        ];

  return (
    <div className="bg-black text-white py-2">
      <Marquee pauseOnHover speed={50}>
        {marqueeData.map((item) => (
          <span key={item.id} className="mx-6">
            New Arrivals: {item.tileName} | {item.text} | Join the Community...
          </span>
        ))}
      </Marquee>
    </div>
  );
}