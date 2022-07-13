import './App.css';
import {Fragment, useState} from "react";
import Modal from "./components/Modal";
import List from "./components/List";
import {Button, Divider} from "@mui/material";
import {Wrapper} from "./components/Styles";


const App = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [index, setIndex] = useState(0);
    const [list, setList] = useState([
        {title: "Title 1", content: "Content 1"},
        {title: "Title 2", content: "Content 2"},
        {title: "Title 3", content: "Content 3"},
    ]);

    const createItem = () => {
        setIsNew(true);
        setModalStatus(true);
    }

    return (
        <Fragment>
            <Wrapper>
                <Button variant={"contained"} onClick={createItem}>
                    Create New Article
                </Button>
                <Divider style={{
                    width: "100%",
                    margin: "30px 0",
                }}/>
                {modalStatus &&
                    <Modal setModalStatus={setModalStatus}
                           list={list}
                           setList={setList}
                           isNew={isNew}
                           index={index}/>}
                <List setModalStatus={setModalStatus}
                      list={list}
                      setList={setList}
                      setIndex={setIndex}
                      setIsNew={setIsNew}/>
            </Wrapper>
        </Fragment>
    );
};

export default App;
