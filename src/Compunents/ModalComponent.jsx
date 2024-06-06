import React, { useState } from "react";

const ModalComponent = ({ handleclick, handleClose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSave = () => {
    // Handle save logic here
    handleClose();
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-6 w-full max-w-xl mx-4 md:mx-0">
          <div className="flex flex-col items-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div className="w-64 sm:w-96 h-64 sm:h-96 border-2 border-gray-700 rounded-2xl flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                ) : (
                  <>
                    <div>
                      <img
                        src="upload.png"
                        alt="upload_icon"
                        className="w-12 m-auto my-2"
                      />
                      <p>Upload Image</p>
                    </div>
                  </>
                )}
              </div>
            </label>
            <div className="mt-4">
              <label>Add Title Name</label>
              <input
                type="text"
                placeholder="Anxious"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border-2 border-gray-700 rounded-2xl w-full focus:outline-none focus:border-blue-500 hover:border-gray-900"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center mt-4 w-full space-y-2 sm:space-y-0">
              <button
                onClick={handleSave}
                className="bg-black text-white w-full rounded-full mr-2 py-2"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-300 text-black rounded-full w-full py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
