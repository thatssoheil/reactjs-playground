import './App.css';
import {Fragment, useEffect, useState} from "react";
import useModal from "./components/useModal";
import Modal from "./components/Modal";

const App = () => {
    const [modalStatus, toggle] = useModal();

    return (
        <Fragment>
            <div>
                <button className="button-default" onClick={toggle}>
                    Create New Article
                </button>
                <Modal modalStatus={modalStatus} toggle={toggle}/>
            </div>
        </Fragment>
    );
};

export default App;
