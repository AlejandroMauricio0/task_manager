import { useEffect, useState } from "react";
import Card from "./card";

function Table({ taskSave, setTaskSave }) {

    const [isMobile, setIsMobile] = useState(false);
    const [taskdone, setTaskDone] = useState(false);

    const taskCheck = (e) => {
        setTaskDone(!taskdone)
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
            <table class="table table-striped" >

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col ">Done</th>
                        <th scope="col">Task</th>
                        {
                            isMobile ?
                                <>
                                    <th scope="col">start date</th>
                                    <th scope="col">End date</th>
                                </>
                                :
                                null
                        }
                        <th scope="col">Description</th>
                        <th scope="col">State</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        taskSave.map((content, index) => (
                            <Card content={content} index={index} key={index} setTaskSave={setTaskSave} taskSave={taskSave} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;