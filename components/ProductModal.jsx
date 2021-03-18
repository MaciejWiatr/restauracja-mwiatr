import Modal from "react-modal";

export const customStyles = {
    overlay: {
        zIndex: "98",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
        border: "none",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        borderRadius: "0.5rem",
    },
};

export function ProductModal(props) {
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            appElement={
                typeof window === "undefined"
                    ? null
                    : document.getElementById("__next")
            }
        >
            <div className="w-full md:w-card h-96 bg-white flex overflow-hidden z-max">
                <div className="w-1/2 h-full">
                    <img
                        src={props.actveProduct.img} // layout="fill"
                        className="object-cover h-full"
                    />
                </div>
                <div
                    className="w-1/2 p-4 flex flex-col
                     items-start"
                >
                    <h2 className="font-semibold text-2xl pb-2 mb-2 w-full">
                        {props.actveProduct.name}
                    </h2>
                    <p className="text-sm text-gray-500">Składniki:</p>
                    <ul className="product-list__wrapper">
                        <li className="product-list__item">Ciasto na pizze</li>
                        <li className="product-list__item">Sos do pizzy</li>
                        <li className="product-list__item">Ser do pizzy</li>
                    </ul>
                    <p className="text-sm text-gray-500">Opis:</p>
                    <p className="flex-grow overflow-y-scroll bg-gray-100 rounded-lg mb-2 p-2">
                        {props.actveProduct.description}
                    </p>
                    <div className="flex flex-col items-start w-full ">
                        <p className="text-sm text-gray-500">Cena:</p>
                        <p className="text-lg font-medium mb-2"> 12.99zł</p>
                        <button
                            onClick={() =>
                                props.addCartItem(props.actveProduct.id)
                            }
                            className="btn btn--black btn--big"
                        >
                            Dodaj do koszyka
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
