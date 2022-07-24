import{useSelector} from "react-redux"
import Todo from './todo.jsx'
import { useDispatch } from "react-redux"
import { changeStatus } from '../api/changeStatus.api.js'
import { getDataAction } from '../store/actions/getData.action.js'
import {SET_TRUE} from "../store/actions/newTaskAction.js"
import { changeTasks } from "../api/changeTasks.api.js"

function List({id , props}) {

    const allTasks =useSelector(state => state.tasks)
    const selectedTask = useSelector(state => state.selectedTask.task)
    const dispatch = useDispatch()
    const isDone = id == "task" ? false : true ; 


    // setiing the new task true
    const handleClickNewTask = ()=>{
    dispatch({type : SET_TRUE})
    }

      // changing the order of tasks based on drag element
    const reOrder = (item , moveToBottom) => {
     let index ;
     
   
    // checking if the release point inside dropzone is dropZone itself or is over another task
    if (!moveToBottom) {
      allTasks.forEach((e , i) => {
        if (e.id == item.id) {
          
          index = i
        }
        
        
      });
      const newArray = allTasks.filter(item => item.id != selectedTask.id)
     
     
     newArray.splice(index , 0 , selectedTask)

     dispatch(getDataAction(newArray))
    //  dispatch(changeTasks(newArray))

    }else{
      const newArray = allTasks.filter(item => item.id != selectedTask.id)
      newArray.push(selectedTask)
      dispatch(getDataAction(newArray))
    }

    
    
  }
  // changing the status of task based on the drop zone
  // 1-moveing the task to another category
  // 2-changing the order of tasks in the same category
  // 3-doing nothing
  const handleDrop= (e) => {

    const dropZone = e.target.id == "task" || e.target.id == "done" ? e.target.id : false ; 
    const item = e.target.id ? e.target : e.target.parentElement

    // if the element has been dragged inside the dropZone and not over another task
    if (dropZone) {
      if (dropZone == "task") {
        if(selectedTask.done){
            // if the element dragged into a different dropzone
          dispatch(changeStatus(selectedTask.id , !selectedTask.done))
        }else{
            // if the element is insde the same dropZone
          reOrder(null , true)
        }
      }
      if (dropZone == "done") {
        if(!selectedTask.done){
          dispatch(changeStatus(selectedTask.id , !selectedTask.done))
        }else{
          reOrder(null , true)
        }
      }
    }
    if(!dropZone && item){
    
      if(item.parentElement.id == "done"){

        if (selectedTask.done) {
          reOrder(item , false)
        }else{
          dispatch(changeStatus(selectedTask.id , !selectedTask.done))
          reOrder(item , false)
        }
      }
      if(item.parentElement.id == "task"){
      
        if (!selectedTask.done) {
          reOrder(item , false)
        }else{
          dispatch(changeStatus(selectedTask.id , !selectedTask.done))
          reOrder(item , false)
        }
      }
    }

  }
  // enabling the dropzone for drop event
  const handleDragOver = (e) => {
    e.preventDefault()
  }
  return (
    <div id={id} className="min-w-50 w-25 h-75 position-relative text-white bg-dark d-flex flex-column align-items-center mt-5 rounded"
      style={{}}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      >
        <div>
          <h2 className="p-2 ">{id}</h2>
        </div>
        {props.map(item => {
          return <Todo props={item} key={item.id} />
        })}

        {!isDone && <button className='bg-primary text-white position-fixed ' style={{bottom : "25%"}} onClick={handleClickNewTask}
        
        >Create New</button>}
      </div>
  )
}

export default List