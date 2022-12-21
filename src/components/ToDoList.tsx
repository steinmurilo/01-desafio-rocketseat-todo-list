
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Task } from './Task';
import { ToDoForm } from './ToDoForm';

import clipboard from '../assets/clipboard.svg'

import styles from './ToDoList.module.css'

interface TaskItem {
    id: string;
    text: string;
    isComplete: boolean;
}

export function ToDoList() {
    const [toDoItems, setToDoItems] = useState<TaskItem[]>([])
    const completedItens = toDoItems.filter(item => item.isComplete === true);

    function createTask(taskToAdd: string) {
        const newTask: TaskItem = {
            id: uuidv4(),
            text: taskToAdd,
            isComplete: false
        }

        setToDoItems([...toDoItems, newTask]);
    }

    function changeChecked(taskToChange: string) {
        const tempList = [...toDoItems];
        tempList.map(item => {
            if(item.id === taskToChange) {
                return item.isComplete = !item.isComplete;
            } else {
                return item;
            }
        });
        setToDoItems(tempList);
    }

    function deleteTask(taskToDelete: string) {
        const tempList = toDoItems.filter(item => item.id !== taskToDelete);
        setToDoItems(tempList);
    }

    return(
        <div className={styles.container}>
            <ToDoForm onCreateTask={createTask}/>
            <div className={styles.wrapper}>
                <div className={styles.counters}>
                    <strong>Tarefas criadas <span>{toDoItems.length}</span></strong>
                    <strong>Concluídas <span>{`${completedItens.length} de ${toDoItems.length}`}</span></strong>
                </div>
                {toDoItems.length === 0 ?
                    <div className={styles.emptyList}>
                        <img src={clipboard} alt="Clipboard" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                :
                    <div>
                        {toDoItems.map(item => (
                            <Task
                                key={item.id}
                                content={item}
                                onChangeChecked={changeChecked}
                                onDeleteTask={deleteTask}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}