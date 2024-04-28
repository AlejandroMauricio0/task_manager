import { useState } from "react";
import Table from "./table";
import Modal from "./modal";



function Tasks() {
    const [taskSave, setTaskSave] = useState([]);
    const [data, setData] = useState([]);

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value,
        });
    };

    const addTask = () => {
        setTaskSave([...taskSave, data]);
        form.current.reset();
        setData([]);
    }



    return (
        <>
            {/* <Modal/> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">New task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="p-2">
                            <div class="mb-">
                                <label for="recipient-name" class="col-form-label">Task:</label>
                                <input name="task" onChange={handleChange} type="text" class="form-control" id="recipient-name" />
                            </div>

                            <div>
                                <label for="start" className="col-form-label">Start date:</label>
                                <input onChange={handleChange} type="date" className="form-control" id="start" name="date_start" min="2024-01-01" max="2024-12-31" />
                            </div>
                            <div>
                                <label for="start" className="col-form-label">End date:</label>
                                <input onChange={handleChange} type="date" className="form-control" id="start" name="date_end" min="2024-01-01" max="2024-12-31" />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Description:</label>
                                <textarea onChange={handleChange} name="description" class="form-control" id="message-text"></textarea>
                            </div>
                            <div className="mb-3">
                                <button type="button" class="btn btn-outline-primary" aria-label="Close" data-bs-dismiss="mod al" onClick={() => addTask()}>Add task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container mt-5 p-2 rounded">
                <div className="bg-light rounded p-2 ">
                    <div class="row justify-content-between">
                        <div class="col-4 p-1 ps-3">
                            Agregar una nueva tarea
                        </div>
                        <div class="col-4 text-end">
                            <button type="button " class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                new task {' '}
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <Table taskSave={taskSave} setTaskSave={setTaskSave} />
                </div>
            </div>



        </>
    );
}

export default Tasks;