import { useEffect, useState } from "react";

function Modal({ content, UpdateTask, setTaskSave, taskSave, index }) {

    const [data, setData] = useState(content);


    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value,
        });
    };


    const updateTask = () => {
        const updatedTasks = taskSave.map((contentTask, i) => {
            if (i === index) {
                return {
                    ...contentTask,
                    task: data.task,
                    date_start: data.date_start,
                    date_end: data.date_end,
                    description: data.description,
                }
            }
            return contentTask;
        });
        setTaskSave(updatedTasks);
    }

   

    return (
        <>

            <div class="position-absolute top-50 start-50 translate-middle" style={{ width: '80%' }}>
                <div className="container-fluid bg-secondary-subtle rounded">
                    <h1 className="text-center">Update task</h1>
                    <form className="p-2">
                        <div class="mb-">
                            <label for="recipient-name" class="col-form-label">Task:</label>
                            <input name="task" onChange={handleChange} value={data.task} type="text" class="form-control" id="recipient-name" />
                        </div>

                        <div>
                            <label for="start" className="col-form-label">Start date:</label>
                            <input onChange={handleChange} value={data.date_start} type="date" className="form-control" id="start" name="date_start" min="2024-01-01" max="2024-12-31" />
                        </div>
                        <div>
                            <label for="start" className="col-form-label">End date:</label>
                            <input onChange={handleChange} value={data.date_end} type="date" className="form-control" id="start" name="date_end" min="2024-01-01" max="2024-12-31" />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Description:</label>
                            <textarea onChange={handleChange} value={data.description} name="description" class="form-control" id="message-text"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="button" class="btn btn-outline-primary" aria-label="Close" data-bs-dismiss="mod al" onClick={() => updateTask()} >Update</button>
                            <button type="button" class="btn btn-outline-danger ms-2" aria-label="Close" data-bs-dismiss="mod al" onClick={() => UpdateTask()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Modal;