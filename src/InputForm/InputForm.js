import React, { useState } from 'react';

function InputForm({onNewInput}){

    const [inputFromUser,setInputFromUser] = useState({
        id: '',
        name: '',
        age: '',
        gender: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputFromUser({ ...inputFromUser, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onNewInput(inputFromUser);
        setInputFromUser({ id: '', name: '', age: '', gender: '' });
    };

    return (
        <div style={{ width: '400px', margin: '20px' }}>
            <h2>Add Record</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>ID:</label>
                    <input
                        type="number"
                        name="id"
                        value={inputFromUser.id}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={inputFromUser.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={inputFromUser.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={inputFromUser.gender}
                        onChange={handleInputChange}
                    >
                        <option value=""></option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>
                <button type="submit">Add Record</button>
            </form>
        </div>
    );
}

export default InputForm;
