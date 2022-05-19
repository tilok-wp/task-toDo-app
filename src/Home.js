import React from 'react';

const Home = () => {
    return (
        <div>
            <form >
                <input type="text" name='taskName' placeholder='Task name' required />
                <input type="text" name='taskDesc' placeholder='Task Description' required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Home;