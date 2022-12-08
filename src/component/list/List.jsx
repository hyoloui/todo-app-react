import React from "react";
import Todo from "../todo/Todo";

const List = ({todo, setTodo}) => {
    // 완료하기 버튼
    const successTodoHandler = (todoId) => {
        const newSuccessTodo = todo.map((todo) => {
            console.log(todo.id);
            if (todo.id === todoId) {
                return {
                    ...todo,
                    done: !todo.done,
                };
            } else {
                return { ...todo };
            }
        });
        setTodo(newSuccessTodo);
    };

    // 삭제하기 버튼
    const deleteTodoHandler = (id) => {
        const newTodoList = todo.filter((todo) => todo.id !== id);
        setTodo(newTodoList);
    };

    return (
        <main>
                <hr />
                <section>
                    <h2>📝오늘 할 일</h2>
                    <div className="div-flex">
                        {todo.map((todo) => {
                            if (!todo.done) {
                                return (
                                    <Todo
                                        handleSuccess={successTodoHandler}
                                        handleDelete={deleteTodoHandler}
                                        todo={todo}
                                        key={todo.id}
                                    ></Todo>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </section>
                <hr />
                <section>
                    <h2>✔ 오늘 끝낸 일 </h2>
                    <div className="div-flex">
                        {todo.map((todo) => {
                            if (todo.done) {
                                return (
                                    <Todo
                                        handleSuccess={successTodoHandler}
                                        handleDelete={deleteTodoHandler}
                                        todo={todo}
                                        key={todo.id}
                                    ></Todo>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </section>
            </main>
    );
}

export default List;