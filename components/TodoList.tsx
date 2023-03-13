import React from "react";
import styled from "styled-components";
import { TodoType } from "../types/todo";

interface IProps {
    todos: TodoType[];
}

const Container = styled.div`
    width: 100%;
`;

const TodoList: React.FC<IProps> = () => {
    return (
        <Container>
            <h1>TodoList</h1>
        </Container>
    );
};

export default TodoList;
