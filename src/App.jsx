import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import {getData} from "./api/getTasks.api.js"
import Todo from './components/todo.jsx'
import NewTask from './components/newTask.jsx'
import { SET_TRUE } from './store/actions/newTaskAction.js'
import Details from './components/detail.jsx'
import { changeStatus } from './api/changeStatus.api.js'
import { getDataAction } from './store/actions/getData.action.js'
import List from './components/list.jsx'

function App() {
  // getting all the tasks that are stored in redux
  const allTasks = useSelector(state => state.tasks)

  // making two categoties of tasks : 
  // 1-tasks to be done 
  // 2-tasks that are done
  const doneTasks = allTasks.filter(item => item.done)
  const notDoneTasks = allTasks.filter(item => !item.done)

  const dispatch = useDispatch()

  



  useEffect(() => {
    // getting the data saved in db.json on inital rendering 
    dispatch(getData())
  }, [])
  

  return (
    <div className="container-fluied bg-light vh-100 vw-100 sm-flex-column  d-flex justify-content-around" >
      
      <List id={"task"} props={notDoneTasks} key={1} />
      <List id={"done"} props={doneTasks}  key={2}/>
      <NewTask />
      <Details />
    </div>
  )
}

export default App
