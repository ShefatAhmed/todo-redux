import { useState } from "react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useAppDispatch } from "../../redux/hook";
import { fillterTodo } from "../../redux/features/todoSlice";

const TodoFillter = () => {
    const [position, setPosition] = useState("bottom")
    const dispatch = useAppDispatch()
    const filterTodo = (title : string) => {
        dispatch(fillterTodo(title))
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Fillter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Fillter by priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem onSelect={() => filterTodo("high")} value="high">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem onSelect={() => filterTodo("medium")} value="medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem onSelect={() => filterTodo("low")} value="low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default TodoFillter;