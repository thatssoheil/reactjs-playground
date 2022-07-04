import {useState} from "react";
import {Component, Title} from "./Styles";
import {TextField} from "@mui/material";

const TextArea = (props) => {

    const handleChange = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <Component>
            <Title>Component 1</Title>
            <TextField id="sample-text"
                       label="Sample Text"
                       variant="outlined"
                       value={props.value}
                       onChange={handleChange}/>
        </Component>
    );
}

export default TextArea