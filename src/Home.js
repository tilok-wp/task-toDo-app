import React, { useState } from 'react';

const Home = () => {
    const [lists, setLists] = useState([])

    const addListSubmit = (e) => {
        e.preventDefault()
        const taskName = e.target.taskName.value
        const taskDesc = e.target.taskDesc.value
        let liteItems = [lists]
        const addItem = { taskName, taskDesc }
        const newLists = liteItems.push(addItem)
        setLists(newLists)
    }




    return (
        <div>
            <form onSubmit={() => addListSubmit()}>
                <input type="text" name='taskName' placeholder='Task name' required />
                <input type="text" name='taskDesc' placeholder='Task Description' required />
                <input type="submit" value="Add" />
            </form>

            <div>
                <h3>All list {lists.length}</h3>
                <ul>
                    {lists.map((item, i) => <li key={i}>Taks: {item.taskName}  Description: {item.taskDesc} <button>Complete</button> <button>X</button></li>)}
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;