import React, { useState, useRef, useEffect } from 'react';
import Modal from "./modal";


function Card({ content, index, setTaskSave, taskSave }) {
    const [taskdone, setTaskDone] = useState(false);
    const [upDateTask, setupDateTask] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const taskCheck = (e) => {
        setTaskDone(!taskdone)
    }

    const removeTask = () => {
        const newList = taskSave.filter((item, i) => i !== index);
        setTaskSave(newList)
        // setMyCart(newcart)
    }

    const UpdateTask = () => {
        setupDateTask(!upDateTask)
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth > 390);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>



            <tr className={`${taskdone ? "text-decoration-line-through" : null}`}>
                <th scope="row">{index}</th>
                <th scope="row">
                    <input class="form-check-input" onClick={() => taskCheck()} type="checkbox" value="" id="flexCheckDefault" />
                </th>
                <td className="">{content.task}</td>
                {
                    isMobile ?
                        <>
                            <th scope="col ">{content.date_start}</th>
                            <th scope="col">{content.date_end}</th>
                        </>
                        :
                        null
                }
                <td><p className='t'>{content.description}</p></td>
                <td >
                    {upDateTask ? <Modal content={content} UpdateTask={UpdateTask} setTaskSave={setTaskSave} taskSave={taskSave} index={index} /> : null}
                    <button type="button" class="btn btn-outline-warning ms-1" onClick={() => UpdateTask()}>Update</button>
                    <button type="button" class="btn btn-outline-danger ms-1 mt-1" onClick={() => removeTask()}>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default Card;
