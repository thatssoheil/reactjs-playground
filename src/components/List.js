import "./List.css"
import {Button, Container} from "@mui/material";
import {ButtonWrapper, ContentWrapper} from "./Styles";

const List = ({list, setList, setIndex, setModalStatus, setIsNew}) => {

    const editItem = (title) => {
        setIsNew(false);
        for (const index in list) {
            if (list[index].title === title) {
                setIndex(index);
                setModalStatus(true);
            }
        }
    }

    const deleteItem = (title) => {
        setList(list.filter(item => item.title !== title));
    }

    return (
        <Container>
            {list.map((item, index) => {
                return (
                    <ContentWrapper>
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                        <ButtonWrapper>
                            <Button id={"edit-button"} onClick={() => editItem(item.title)}>EDIT</Button>
                            <Button id={"delete-button"} onClick={() => deleteItem(item.title)}>DELETE</Button>
                        </ButtonWrapper>
                    </ContentWrapper>
                );
            })}
        </Container>
    );
};

export default List;