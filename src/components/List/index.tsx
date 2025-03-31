import style from "./List.module.scss";
import Item from "./Item";
import { Itask } from "../../types/task";

function List({ tasks }: { tasks: Itask[]}) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
