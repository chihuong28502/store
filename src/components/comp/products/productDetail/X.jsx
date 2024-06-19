import React, { useEffect } from 'react';

const ModalBag = ({ isOpen, onClose }) => {
  // Đóng modal khi nhấn phím Esc
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Đóng modal khi click ra ngoài
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 opacity-25"
            onClick={handleCloseModal}
          ></div>
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              {/* Modal header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">Modal Title</h3>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero sit amet nunc dictum, nec faucibus libero
                consequat.
              </p>
              {/* Modal footer */}
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalBag;
