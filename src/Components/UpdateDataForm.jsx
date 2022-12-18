import React, { useEffect, useState } from 'react';
import Update from './Update';

const UpdateDataForm = () => {
    const [up, setUp] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/elected-options')
            .then(res => res.json())
            .then(data => setUp(data))
    }, [])
    
    return (
        <>
        {
            up.map(u => <Update key={u._id} u={u}/>)
        }
        </>
    );
};

export default UpdateDataForm;