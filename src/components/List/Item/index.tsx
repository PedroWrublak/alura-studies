import { Itask } from '../../../types/task';
import style from './Item.module.scss'

interface Props extends Itask {
    selectTask: (selectedTask: Itask) => void
}

export default function Item(
    { 
        task, 
        time, 
        selected, 
        completed, 
        id, 
        selectTask 
    }: Props) {
    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`} 
            onClick={() => selectTask(
                {
                task,
                time, 
                selected,
                completed,
                id
                }
            )}
        >
            <h3> {task} </h3>
            <span> {time} </span>
        </li>
    )
}