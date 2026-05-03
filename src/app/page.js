import Image from "next/image";
import bannar from "@/assets/bannar.jpg"
import Slicecard from "@/component/Slicecard";
import Link from "next/link";
import "animate.css";
export default function Home() {
  
  return (
    <div>
      <div className="">
      <div className="md:m-10 relative">
  <Image className="w-auto h-auto animate__animated animate__zoomIn" src={bannar} alt="Bannar image" />

  <div className="absolute top-2/4 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 className="text-xl md:text-5xl text-zinc-800 font-sans font-bold tracking-tight animate__animated animate__bounce">
      Discover Your Perfect Aesthetic
    </h1>
    <button className="btn  btn-primary my-5 animate__animated animate__slideInUp"><Link href={"/all-tiles"}>Browse Now</Link></button>
  </div>
  
</div>
      
      
    </div>

    <Slicecard></Slicecard>
    </div>
  );
}
