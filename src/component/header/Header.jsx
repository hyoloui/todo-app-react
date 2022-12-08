import CustomButton from "../CustomButton";

const Header = (props) => {
    const { title, setTitle,content, setContent, addTodoHandler} = props
    return (
    <header>
        <label> 제목 </label>
        <input
            value={title}
            placeholder="오늘의 할 일 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
        />
        <label> 내용 </label>
        <input
            value={content}
            placeholder="상세 내용을 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setContent(e.target.value)}
        />
        <CustomButton color="green" onClick={addTodoHandler}>
            추가하기
        </CustomButton>
    </header>
    );
};

export default Header;
