import { Circle, CheckCircle, Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

interface TaskProps {
    content: {
        id: string;
        text: string;
        isComplete: boolean;
    };
    onChangeChecked: (comment: string) => void;
    onDeleteTask: (comment: string) => void;
}

export function Task({ content, onChangeChecked, onDeleteTask }: TaskProps) {

    function handleChangeChecked() {
        onChangeChecked(content.id);
    }

    function handleDeleteTask() {
        onDeleteTask(content.id);
    }

    return (
        <div className={styles.taskBox}>
                {content.isComplete &&
                <button className={styles.checked} onClick={handleChangeChecked}>
                    <CheckCircle size={22} />
                </button>
                }
                {!content.isComplete &&
                <button className={styles.unchecked} onClick={handleChangeChecked}>
                    <Circle size={24} />
                </button>
                }
            <span className={content.isComplete? styles.taskComplete : styles.taskIncomplete}>
                {content.text}
            </span>
            <button className={styles.delete} onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}