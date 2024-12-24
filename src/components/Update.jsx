import React from 'react';

const Update = ({ isModalOpen, closeModal }) => {
    return (
        <div className='bg-gold'>
            {/* Modal dialog */}
            <dialog id="my_modal_3" className="modal fixed inset-0 w-full h-full m-0 p-0 bg-gold bg-opacity-35 backdrop-blur-lg" open={isModalOpen}>
                <div className="modal-box w-full h-full backdrop-blur-lg">
                    <form method="dialog">
                        {/* Close button */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default Update;
