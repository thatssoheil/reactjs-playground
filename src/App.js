import './App.css';
import {Fragment, useEffect, useState} from "react";
import {Wrapper} from "./components/Styles";
import TextArea from "./components/TextArea";
import LineArea from "./components/LineArea";
import MaxLengthArea from "./components/MaxLengthArea";
import ResultArea from "./components/ResultArea";

const App = () => {
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
                <TextArea value={value} setValue={setValue} />
                <LineArea count={count} setCount={setCount} />
                <MaxLengthArea maxLength={maxLength} setMaxLength={setMaxLength} />
                <ResultArea result={result} setResult={setResult} isActive={isActive} />
            </Wrapper>
        </Fragment>
    );
}

export default App;
