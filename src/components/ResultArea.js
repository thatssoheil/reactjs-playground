import {Component, Title} from "./Styles";

const ResultArea = (props) => {

    return (
        <Component>
            <Title>Component 4</Title>
            <h1>Result</h1>
            {props.result.map((e) =>
                <p className={`${props.isActive ? 'Active' : null}`}>{e}</p>)}
        </Component>
    );
}

export default ResultArea;