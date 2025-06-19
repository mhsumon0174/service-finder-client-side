import React, { use } from 'react';
import { AuthContext } from '../provider/AUthContext';

const AddService = () => {
    const {user}=use(AuthContext)
    const handleForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData;
        const data=Object.fromEntries(formData.entries())
    }
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-xl my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Service</h2>
      <form  className="space-y-4">
        <input name="image" type="text" placeholder="Service Image URL" className="input input-bordered w-full"  />
        <input name="title" type="text" placeholder="Service Title" className="input input-bordered w-full" required />
        <input name="company" type="text" placeholder="Company Name" className="input input-bordered w-full" required />
        <input name="website" type="url" placeholder="Website URL" className="input input-bordered w-full" />
        <textarea name="description" placeholder="Service Description" className="textarea textarea-bordered w-full" required></textarea>
        <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" required />
        <input name="price" type="number" placeholder="Price (USD)" className="input input-bordered w-full" required />
        <input name='email' type='email' readOnly placeholder={user?.email} className="input input-bordered w-full"/>
        <button type="submit" className="btn btn-primary w-full">Add Service</button>
      </form>
    </div>
    );
};

export default AddService;