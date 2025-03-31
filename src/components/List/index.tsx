import style from "./List.module.scss";
import Item from "./Item";
import { Itask } from "../../types/task";

interface Props {
  tasks: Itask[],
  selectTask: (selectedTask: Itask) => void
}

function List({ tasks, selectTask }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
          selectTask={selectTask}
           key={item.id} 
           {...item} 
           />
        ))}
      </ul>
    </aside>
  );
}

export default List;
