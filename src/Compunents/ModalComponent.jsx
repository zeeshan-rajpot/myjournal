import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const ModalComponent = ({ handleClose, createEntry, refresh }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    if (!image) {
      setError("No Image Found");
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      setLoading(true);
      const userData = await createEntry(formData);
      toast.success("Entry created successfully!");
      handleClose();
      refresh();
      console.log(userData);
    } catch (error) {
      toast.error("Failed to create entry. Please try again.");
      console.error("Error creating entry:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-6 w-full max-w-lg mx-4 md:mx-0">
          <div className="flex flex-col items-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div className="w-72 sm:w-[28rem] h-64 sm:h-96 border-2 border-gray-700 rounded-2xl flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
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
              <label className="ms-3">Add Title Name</label>
              <input
                type="text"
                placeholder="Anxious"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="modal-input-style sm:w-[28rem]"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center mt-4 w-full space-y-2 sm:space-y-0">
              <button
                onClick={handleSave}
                className="bg-black text-white w-full rounded-full mr-2 py-2"
              >
                {loading ? <ClipLoader size={23} color="#ffffff" /> : "Save"}
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
