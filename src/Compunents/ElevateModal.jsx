import React, { useState } from "react";
import "./modal.css";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const ElevateModal = ({ handleclick, handleClose, createEntry, refresh }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const userData = await createEntry({title});
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

export default ElevateModal;
