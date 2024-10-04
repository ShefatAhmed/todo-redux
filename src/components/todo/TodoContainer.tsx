import { useGetTodosQuery } from "../../redux/api/api";
import { useAppSelector } from "../../redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFillter from "./TodoFillter";

const TodoContainer = () => {
    const { todos } = useAppSelector(state => state.todos)
    const {data, loading, error} = useGetTodosQuery()
    console.log(data);
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFillter />
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3">
                {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
                    <p>There is no task pending</p>
                </div> */}
                <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
                    {
                        todos.map(item =>
                            (<TodoCard  {...item} description={item.description} />)
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default TodoContainer;