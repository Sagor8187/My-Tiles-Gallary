export const myproduct = async ()=>{
    const res = await fetch("https://my-tiles-server-1.onrender.com/product")
    const output = await res.json()

    return output
}
