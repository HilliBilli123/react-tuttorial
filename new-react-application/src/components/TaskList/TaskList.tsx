import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  return (
    <>
        <TaskItem name='Выучить React' done={true} />
        <TaskItem name='Сделать домашку' done={false} />
        <TaskItem name='Прочитать статью' done={true} />
    </>
  )
}
