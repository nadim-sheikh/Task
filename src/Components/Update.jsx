import React from 'react';

const Update = ({u}) => {
    const {name, _id} = u
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const allData = { name }

        fetch(`http://localhost:5000/elected-options/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        }).then(res => res.json()).then(data => console.log(data))
    }
    return (
        <form onSubmit={handleUpdate}>
            <label className='label'>Update your details</label>
            <label className='label'>Name:</label>
            <input type="text" name='name' defaultValue={name} required />
            <input className='button' type="submit" value="Update" />
        </form>
    );
};

export default Update;