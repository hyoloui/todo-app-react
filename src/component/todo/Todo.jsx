import CustomButton from "../CustomButton";

function Todo(props) {
    return (
        <div className="card">
            <h3>{props.todo.title}</h3>
            <span>{props.todo.content}</span>
            {/* 취소 & 완료 버튼 */}
            <CustomButton color="blue" onClick={()=>{props.handleSuccess(props.todo.id)}}>{props.todo.done ? "취소" : "완료"}</CustomButton>
            {/* 삭제하기 버튼 */}
            <CustomButton color="red" onClick={()=>{props.handleDelete(props.todo.id)}}>삭제하기</CustomButton>
        </div>
    );
}

export default Todo;