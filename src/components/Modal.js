import {Button, Dialog, InputLabel, TextareaAutosize, TextField} from "@mui/material";
import {ButtonWrapper, CustomDialog} from "./Styles";
import "./Modal.css";
import {useState} from "react";

const Modal = ({setModalStatus, list, setList, isNew, index}) => {
    const [title, setTitle] = useState((isNew) ? "" : list[index].title);
    const [content, setContent] = useState((isNew) ? "" : list[index].content);

    const handleData = () => {
        if (isNew) {
            setList([...list, {title, content}]);
        } else {
            setList([...list.slice(0, index), {title, content}, ...list.slice(index + 1)]);
        }
        setModalStatus(false);
    }

    return (
        <Dialog open={true} onClose={() => setModalStatus(false)}>
            <CustomDialog>
                <InputLabel className="text-label">Title</InputLabel>
                <TextField className="text-field"
                           variant="standard"
                           value={title}
                           onChange={(event) => setTitle(event.target.value)}/>
                <InputLabel className="text-label">Content</InputLabel>
                <TextareaAutosize className="text-area"
                                  variant="outlined"
                                  value={content}
                                  onChange={(event) => setContent(event.target.value)}
                                  style={{width: "100%", height: "100%"}}/>
            </CustomDialog>
            <ButtonWrapper>
                <Button id={"button"}
                        variant={"contained"}
                        onClick={() => !setModalStatus(false)}
                        style={{
                            backgroundColor: "whitesmoke",
                            color: "#1976d2"
                        }}>
                    Cancel
                </Button>
                <Button id={"button"} variant={"contained"}
                        onClick={handleData}
                        style={{
                            marginRight: "10px",
                        }}>
                    {isNew ? "Publish" : "Edit"}
                </Button>
            </ButtonWrapper>
        </Dialog>
    );
}

export default Modal;