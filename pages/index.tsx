import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

const app: NextPage = () => {
    console.log(process.env.NEXT_PUBLIC_API_URL, "클라이언트");
    return <TodoList />;
};

export const getServerSideProps: GetServerSideProps =
    wrapper.getServerSideProps((store) => async () => {
        console.log(store);
        try {
            const { data } = await getTodosAPI();
            store.dispatch(todoActions.setTodo(data));
            return { props: {} };
        } catch (e) {
            console.log(e);
            return { props: {} };
        }
    });

export default app;
