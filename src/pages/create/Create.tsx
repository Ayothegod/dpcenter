import { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import placeholder from "../../asset/placeholder.png";
const Create = () => {
  const [imagePreview, setImagePreview] = useState();
  const [formData, setFormData] = useState();
  const imageInputRef = useRef();

  const handleImageUpload = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handlePlaceholderClick = () => {
    imageInputRef.current.click();
  };
  return (
    <div className="bg-gray-200 h-full min-h-screen">
      <NavBar />
      <div className="mt-16 md:w-5/6 mx-auto p-2">
        <p className="pt-4 text-xl font-bold mb-8">Create a new DP Banner</p>
        <form action="" className="bg-white p-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            required
            placeholder="please fill in the name of your banner"
            className="my-2 border-2 w-full p-2 border-gray-200 block"
          />
          <label htmlFor="image">Banner Image</label>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="formData.name"
              onClick={handlePlaceholderClick}
            />
          ) : (
            <img
              src={placeholder}
              alt="Placeholder Image"
              onClick={handlePlaceholderClick}
            />
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            id="imageUpload"
            className=""
            placeholder="choose banner"
            ref={imageInputRef}
            onChange={handleImageUpload}
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
