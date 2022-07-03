import './App.css';
import {Fragment, useEffect, useState} from "react";
import {TextField} from '@mui/material'
import {Component, Wrapper, Title} from "./components/Styles";

function App() {
    const [value, setValue] = useState('Sample Text')
    const [count, setCount] = useState(1)
    const [maxLength, setMaxLength] = useState(100)
    const [isActive, setIsActive] = useState(false)
    const [result, setResult] = useState(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push(value)
        }
        return temp;
    })

    const handleChange = (event) => {
        if (event)
            setValue(event.target.value)
        else
            setValue(value);
    }

    const handleCount = (event) => {
        setCount(Number(event.target.value.replace(/\D/g, '')));

    }

    const handleLength = (event) => {
        setMaxLength(Number(event.target.value.replace(/\D/g, '')));
    }

    useEffect(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push(value)
        }
        setResult(temp)

        let length = value.length * count
        if (length > maxLength) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [value, count, maxLength])

    return (
        <Fragment>
            <Wrapper>
                <Component>
                    <Title>Component 1</Title>
                    <TextField id="sample-text"
                               label="Sample Text"
                               variant="outlined"
                               value={value}
                               onChange={handleChange}/>
                </Component>
                <Component>
                    <Title>Component 2</Title>
                    <TextField id="line-count"
                               label="Number of Lines"
                               variant="outlined"
                               value={count}
                               onChange={handleCount}/>
                </Component>
                <Component>
                    <Title>Component 3</Title>
                    <TextField id="max-length"
                               label="Max Length"
                               variant="outlined"
                               value={maxLength}
                               onChange={handleLength}/>
                </Component>
                <Component>
                    <Title>Component 4</Title>
                    <h1>Result</h1>
                    {result.map((e) =>
                        <p className={`${isActive ? 'Active' : null}`}>{e}</p>)}
                </Component>
            </Wrapper>
        </Fragment>
    );
}

export default App;
