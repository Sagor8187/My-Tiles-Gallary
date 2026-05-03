"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'


export default function Searxh() {
  const [search,setsearch]= useState("")
  const searchparams = useSearchParams()
  console.log(searchparams)
  const router = useRouter()
  console.log(router)
  const pathname = usePathname()
  console.log(pathname)
const handlesearch = ()=>{
  const params = new URLSearchParams(searchparams)
  console.log(params)
 
  if(search){
    params.set("category",search)
  }else{
    params.delete("category")
  }
  router.push(`${pathname}?${params.toString()}`)
}
  return (
    <div>
        <div className="join">
  <div>
    <label className="input validator join-item">
     
      <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search by Category name " required />
    </label>
    
  </div>
  <button onClick={handlesearch} className="btn btn-neutral join-item">Search</button>
</div>

    </div>
  )
}

