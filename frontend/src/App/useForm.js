import React, { useState } from "react";

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const [selectedImage, setSelectedImage] = useState(null);
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      console.log(value);
      value = e.target.files[0];
    }

    if (name === "image") {
      setSelectedImage(e.target.value);
    }

    setInputs({ ...inputs, [e.target.name]: value });
  }
  function resetForm() {
    setInputs(initial);
  }
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
    selectedImage,
  };
};

export default useForm;
