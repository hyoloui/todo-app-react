import React, { useState } from "react";
import Header from "../component/header/Header";
import Layout from "../component/layout/Layout";
import List from "../component/list/List";

const TodoList = () => {
    // 오늘 할 일
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "환기 시키기",
            content: "오늘 17시에 빨래하고 18시에 널기",
            done: true,
        },
        {
            id: 2,
            title: "아침 산책 하기",
            content: "오늘 21시에 헬스장 가기",
            done: true,
        },
        {
            id: 3,
            title: "헬스장 가기",
            content: "오늘 21시에 헬스장 가기",
            done: false,
        },
    ]);

    // 제목, 내용 빈값(빈칸)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 오늘 할 일 + 새로운 할 일
    const addTodoHandler = () => {
        const newTodo = {
            id: todo.length + 1,
            title: title,
            content: content,
            done: false,
        };
        setTodo([...todo, newTodo]);
    };

    
    return (
        <Layout>
            <Header 
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            addTodoHandler={addTodoHandler}
            />

            <List todo={todo} setTodo={setTodo}/>
        </Layout>
    );
};

export default TodoList