import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './ToDoForm.module.css'

interface ToDoFormProps {
    onCreateTask: (task: string) => void;
}

export function ToDoForm({ onCreateTask }: ToDoFormProps) {
    const [newTask, setNewTask] = useState('');

    function handleNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateTask(newTask);
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Digite uma nova tarefa!');
    }

    return (
        <form className={styles.wrapper} onSubmit={handleNewTask}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}