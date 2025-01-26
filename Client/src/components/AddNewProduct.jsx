import axios from "axios";
import { useState } from "react";
import Navbar from "./ProductCard/NavBar";


const AddNewProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        short_dir: "",
        long_dir: "",
        price: "",
        discount: "",
        Image: "",
        piecesAvailable: "",
      });
    
      const handleChange =async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData); 

        const response = await axios.post("http://localhost:3000/products/addPerfume",formData);
        console.log(response.status)
        if(response.status == 201 )
        {
            alert("Perfume details submitted successfully!");
            setFormData({
                name: "",
                short_dir: "",
                long_dir: "",
                price: "",
                discount: "",
                Image: "",
                piecesAvailable: "",
              })
        }
        else{
            alert(`Some thing went wrong `)
        }
      };
  return (
    <div>
        <Navbar/>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Add Perfume</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter perfume name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="short_dir">
              Short Description
            </label>
            <input
              type="text"
              name="short_dir"
              id="short_dir"
              value={formData.short_dir}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter short description"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="long_dir">
              Long Description
            </label>
            <textarea
              name="long_dir"
              id="long_dir"
              value={formData.long_dir}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter long description"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="discount">
                Discount (%)
              </label>
              <input
                type="number"
                name="discount"
                id="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter discount percentage"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="piecesAvailable">
                Pieces Available
              </label>
              <input
                type="number"
                name="piecesAvailable"
                id="piecesAvailable"
                value={formData.piecesAvailable}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter stock count"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="Image">
                Image URL
              </label>
              <input
                type="text"
                name="Image"
                id="Image"
                value={formData.Image}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter image URL"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AddNewProduct