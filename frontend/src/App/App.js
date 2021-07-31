import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "./useForm";

function App() {
  const [ImageList, setImageList] = useState([]);
  const [Result, setResult] = useState();
  useEffect(() => {
    axios("http://localhost:3001/api/imagelist/")
      .then((response) => {
        setImageList(response.data.imagelist);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { inputs, handleChange, clearForm, resetForm, selectedImage } = useForm(
    {
      image: "",
      width: 0,
      height: 0,
    }
  );

  console.log(inputs);

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="#" className="p-4 text-xl font-bold text-white bg-black">
            TonTosirikul's Site
          </a>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">IMAGE PROCESSING APP</p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={async (e) => {
              e.preventDefault();
              if (inputs.image !== "") {
                axios({
                  url: `http://localhost:3001/api/resize?image=${inputs.image}${
                    inputs.width >= 0 ? `&width=${inputs.width}` : ""
                  }${inputs.height >= 0 ? `&height=${inputs.height}` : ""}`,
                  method: "GET",
                  responseType: "blob", // important
                }).then((response) => {
                  const url = window.URL.createObjectURL(
                    new Blob([response.data])
                  );
                  setResult(url);
                });
              }
              clearForm();
            }}
          >
            <div className="flex flex-col pt-4">
              <div className="flex relative">
                <select
                  id="image"
                  name="image"
                  onChange={handleChange}
                  value={inputs.image}
                  className="flex-1 block w-52 py-2 px-3 border border-gray-300 text-gray-700 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value={""}>none</option>
                  {ImageList.map((image) => (
                    <option value={image}>{image}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="flex relative flex-1">
                <input
                  type="number"
                  id="width"
                  name="width"
                  className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  placeholder="Width"
                  value={inputs.width}
                  onChange={handleChange}
                />
              </div>
              <div className="flex relative flex-1">
                <input
                  type="number"
                  id="height"
                  name="height"
                  className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent ml-1"
                  placeholder="Height"
                  value={inputs.height}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="flex relative flex-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mt-4"
                >
                  <span className="w-full">Submit</span>
                </button>
              </div>
              <div className="flex relative flex-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mt-4 ml-1"
                >
                  <span className="w-full">Clear</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
        {Result ? (
          <img
            className="hidden object-none w-full h-screen md:block"
            src={Result}
            alt="result"
          />
        ) : (
          <div className="hidden object-none w-full h-screen md:block"></div>
        )}
      </div>
    </div>
  );
}

export default App;
