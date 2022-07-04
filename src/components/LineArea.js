import {useState} from "react";
import {Component, Title} from "./Styles";
import {TextField} from "@mui/material";

const LineArea = (props) => {

    const handleChange = (event) => {
        props.setCount(Number(event.target.value.replace(/\D/g, '')));

    }

    return (
        <Component>
            <Title>Component 2</Title>
            <TextField id="line-count"
                       label="Number of Lines"
                       variant="outlined"
                       value={props.count}
                       onChange={handleChange}/>
        </Component>
    );
}

export default LineArea;