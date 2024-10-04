import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-center font-semibold text-3xl my-10">My todos</h1>
            <TodoContainer />
        </Container>
    )
};

export default Todo;
