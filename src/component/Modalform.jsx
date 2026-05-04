"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
export default function Modalform() {
  const onSubmit = async (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const url = e.target.url.value;
   if (!name.trim() || !url.trim()) {
  toast.error("Please fill the form");
  
}else{
     await authClient.updateUser({
    image: url,
    name: name,
})
toast.success("Update Successful ✅")
   }
  
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update Info
      </button>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle  text-black"
      >
        <div className="modal-box">
          <div className="modal-action justify-center">
            <form onSubmit={onSubmit} >
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend font-bold text-lg">
                  Update Information
                </legend>

                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="User Write name"
                />

                <label className="label">Image URL</label>
                <input
                  type="text"
                  name="url"
                  className="input"
                  placeholder="Image URl Write here"
                />

                <button type="submit"  className="btn btn-neutral mt-4">Update</button>
              </fieldset>
              <button className="btn" onClick={() => document.getElementById("my_modal_5").close()}
      >Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
