import React, { useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { setNewTask } from '../api/setNewTask.api'
import { SET_FALSE } from '../store/actions/newTaskAction'
import { closeTask} from '../store/actions/selectedTask.action'
function Details() {
    // getting the status from redux store
    const selected = useSelector(state => state.selectedTask)
    const task = selected.task 
    const isOpen = selected.isOpen 

   
    const dispatch = useDispatch()


   

    const handleClick = ()=> {
        dispatch(closeTask())
    }
      // if user is clicking outside of the form close the form 
      const handleCloseClick = (e) => {
        const element = e.target ; 

        if(element.id == "details-contaienr") {
            dispatch(closeTask())
        }
    }

  return <>
    {isOpen && 
    <div id='details-contaienr' className='position-absolute  vw-100 vh-100 d-flex align-items-center justify-content-center ' style={{background : "rgba(0,0,0,0.7)"}}
    onClick={handleCloseClick}
    >
        
        <div className='d-flex p-5 bg-white flex-column w-50 h-50' >
            <div  className='m-3'  >
              <h2>Title</h2>
              <p>{task.title}</p>
            </div>
            <div  className='m-3 h-25'  >
            <h2>Info</h2>
              <p>{task.info}</p></div>
            <button type='button' className='bg-primary w-25 m-auto' onClick={handleClick}>close</button>
        </div>
    </div>
    }
  </>
}

export default Details