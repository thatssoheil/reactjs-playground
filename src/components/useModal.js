import {useState} from "react";

const useModal = () => {
    const [modalStatus, setModalStatus] = useState(false);

    const toggle = () => {
        setModalStatus(!modalStatus);
    }

    return {
        modalStatus,
        toggle
    }
};

export default useModal;