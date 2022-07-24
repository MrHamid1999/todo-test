import { useDispatch , useSelector } from "react-redux"
import { changeStatus } from "../api/changeStatus.api"
import { deleteTask } from "../api/deleteTask.api"
import { getDataAction } from "../store/actions/getData.action"
import { draggingTask, selectTask } from "../store/actions/selectedTask.action"


function Todo({props}) {

    // getting the given data via props 
    const { id , title , done } = props
    // getting the list of tasks from redux
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    // toggling the task between done and tobe done 
    // toggling the task "done " props 
    const handleChange = () => {
      const newStatus = !done
      dispatch(changeStatus(id , newStatus))
    }

    // deleting the task from the list using id
    const handleClick = () => {
      const newTasks = tasks.filter(item => item.id != id)
      dispatch(deleteTask(id))
      dispatch(getDataAction(newTasks))
    }
    // opening the detail page after clicking on the button 
    const handleDetailClick = () => {
      const selectedTask = tasks.filter(item => item.id == id)
      dispatch(selectTask(selectedTask[0]))
    }
    // selecting the chosen task and adding it to redux
    const handleDrag = (e) => {
      e.preventDefault()
      const selectedTask = tasks.filter(item => item.id == id)
      dispatch(draggingTask(selectedTask[0]))

    }

    
   


  return (
    <div id={id} className="w-100 border-1 p-3 m-1 text-dark d-flex flex-column bg-white  align-items-end"
    draggable={true}
    onDrag ={handleDrag}
    
    
    >
        <div className="d-flex w-100 justify-content-between p-3 ">
          <p className="my-auto me-2 font-2">{title}</p>  
          <input type="checkbox" className="p-1" checked={done} onChange={handleChange}/>
        </div>

      <div className="d-flex justify-content-between">
        <button className="bg-primary text-white w-25 px-5 d-flex justify-content-center mt-3" onClick={handleDetailClick}>Details</button>
        <button className="bg-danger px-5 text-white w-25 d-flex justify-content-center mt-3" onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

export default Todo