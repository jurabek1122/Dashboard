import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../redux/StudentsSlice';
import { v4 as uuidv4 } from 'uuid';

const AddStudent = () => {

    const [student, setStudent] = useState({
        name: '',
        field: '',
        number: '',
        price: '',
        group: '',
        status: ''
    })
    const {name, field, number, price, group, status } = student

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setStudent((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addStudent({...student, id: uuidv4()}))
        setStudent({
        name: '',
        field: '',
        number: '',
        price: '',
        group: '',
        status: ''
    })
    }
    
    return(
        <div className='add-student'>
            <h2>O`quvchi Qo`shish</h2>
            <form onSubmit={onSubmit} className='add-form'>
                <input 
                    type='text'
                    id='name'
                    value={name}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchi Ismi'
                />
                <input 
                    type='text'
                    id='field'
                    value={field}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchi Yo`nalishi'
                />
                <input 
                    type='text'
                    id='number'
                    value={number}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchi Raqami'
                />
                <input 
                    type='text'
                    id='price'
                    value={price}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='To`lov Miqdori'
                />
                <input 
                    id='group'
                    value={group}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchi Guruhi'
                />
                <input 
                    type='text'
                    id='status'
                    value={status}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchi Statusi'
                />
                <button type='submit' className='btn btn-outline-info'>Qo`shish</button>
            </form>
        </div>
    )
}

export default AddStudent;