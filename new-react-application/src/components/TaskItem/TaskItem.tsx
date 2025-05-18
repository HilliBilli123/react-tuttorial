type TaskItemProps = {
    name: string;
    done: boolean;
}
export default function TaskItem({name, done}: TaskItemProps) {
    let doneComponent: any
    if(done == false){
       doneComponent = (
        <span>❌</span>
       ) 
    }else{
        doneComponent = (
            <span>✅</span>
        )
    }
  return (
    <div>{doneComponent}:{name}</div>
  )
}
