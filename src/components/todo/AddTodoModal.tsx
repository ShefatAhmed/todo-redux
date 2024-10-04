import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch} from "../../redux/hook";
import { addTodo } from "../../redux/features/todoSlice";

const AddTodoModal = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useAppDispatch()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const randomString = Math.random().toString().substring(2,7)
        const taskDetails = {
            id: randomString,
            title: task,
            description: description
        }
        dispatch(addTodo(taskDetails))
    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                            Add your task that you want to finish
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="task" className="text-right">
                                    Task
                                </Label>
                                <Input
                                    id="task"
                                    onBlur={(e) => setTask(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    onBlur={(e) => setDescription(e.target.value)}
                                    id="description"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <DialogClose asChild>
                                <Button type="submit">Save changes</Button>
                            </DialogClose>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default AddTodoModal;