import { ITask } from '../../App'
import styles from '../TaskList/TaskList.module.css'
import {TbTrash} from 'react-icons/tb'
import {BsFillCheckCircleFill} from 'react-icons/bs'

interface Props {
  taskInfo: ITask;
  onDeleted: (taskId: string) => void;
  onCompleted: (taskId: string) => void
}


export const TaskList = ({ taskInfo, onDeleted, onCompleted }: Props) => {
  

  function handleDelete () {
    onDeleted(taskInfo.id)
  }

  function handleCompleteTask () {
    onCompleted(taskInfo.id)
  }
  return (
    <div className={styles.task_list}>
      <button className={styles.check_container} onClick={handleCompleteTask}>
        {taskInfo.isChecked ? <BsFillCheckCircleFill /> : <div/>}
      </button>
      <p className={taskInfo.isChecked ? styles.taskCompleted : ''}> {taskInfo.title}</p>
      <button 
        className={styles.delete}
        onClick={handleDelete}
      >
          <TbTrash size={20} />
      </button>
    </div>
  )
}