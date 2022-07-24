import React, { useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { setNewTask } from '../api/setNewTask.api'
import { SET_FALSE } from '../store/actions/newTaskAction'

function NewTask() {
    // getting the status from redux store
    const isTrue = useSelector(state => state.newTask)

    // setting a ref for our form 
    const formRef = useRef(null)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        // preventing the form to submit the data to the declared path
        e.preventDefault()
        // getting values from inputs inside the form 
        const title = formRef.current.title.value
        const info = formRef.current.info.value
        const id = new Date().getTime()
        const done = false
        const data= {id , title , info , done}
        // cleaning the values inside the inputs 
        formRef.current.title.value = ""
        formRef.current.info.value = ""
        if (title != "") {
            dispatch(setNewTask(data))
            dispatch({type : SET_FALSE})    
        }
    
    }

    const handleClick = ()=> {
        dispatch({type : SET_FALSE})
    }

    // if user is clicking outside of the form close the form 
    const handleCloseClick = (e) => {
        const element = e.target ; 

        if(element.id == "form-container") {
            dispatch({type : SET_FALSE})
        }
    }

  return <>
    {isTrue && 
    <div id="form-container" className='position-absolute  vw-100 vh-100 d-flex align-items-center justify-content-center ' style={{background : "rgba(0,0,0,0.7)"}}
    onClick={handleCloseClick}
    >
        <button className='position-fixed   top-0' onClick={handleClick}> close</button>
        <div className='d-flex bg-white w-50 h-50 position-relative'>
        <i className="bi bi-emoji-smile me-5"></i>
        
            <form action="#" className='d-flex w-100 h-100 p-5 bg-white flex-column ' onSubmit={handleSubmit} ref={formRef}>
                <input type="text" className='m-3' name='title' placeholder='type your title...' />
                <input type="text" className='m-3 h-25' name='info' placeholder='type other details...' />
                <button type='submit' className='bg-primary w-25 m-auto'>ADD</button>
            </form>
        </div>
    </div>
    }
  </>
}

export default NewTask