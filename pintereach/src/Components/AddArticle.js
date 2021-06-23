import React, { useState } from 'react';
import { axiosWithAuth } from '../Authorization/axiosAuth';

const AddArticle = () => {
    const initialValues = {
        title: '',
        author: '',
    }

    const [state, setState] = useState({
        title: '',
        author: '',
    })

    const [formInput, setFormInput] = useState(initialValues)

    const handleChange = e => {
        setFormInput({
            ...formInput, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        const newArticle = {
            title: formInput.title,
            author: formInput.author
        }
    }

    axiosWithAuth()
        .post('')
        .then(res =>{
            const token = localStorage.getItem('token');
        })
        .catch(err => {
            console.log(err);
        })

        setValues(initialValues);

    return(
        <div>
            <h2>New Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input onChange={handleChange} name='title' type='text' value={formInput.title}/>
                <input onChange={handleChange} name='author' type='text' value={formInput.author}/>

                <button onSubmit={handleSubmit}>Add Article</button>
            </form>
        </div>

    )
}

export default AddArticle; 