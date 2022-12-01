import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGroup } from '../redux/StudentsSlice';
import { v4 as uuidv4 } from 'uuid';

const AddStudent = () => {

    const [groupInfo, setGroup] = useState({
        type: '',
        date: '',
        group: '',
        students: '',
        skill: ''
    })
    const {type, date, group, students, skill } = groupInfo

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setGroup((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addGroup({...groupInfo, id: uuidv4()}))
        setGroup({
        type: '',
        date: '',
        group: '',
        students: '',
        skill: ''
    })
    }
    
    return(
        <div className='add-student'>
            <h2>Guruh Qo`shish</h2>
            <form onSubmit={onSubmit} className='add-form'>
                <input 
                    type='text'
                    id='type'
                    value={type}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Yo`nalish frontend / backend'
                />
                <input 
                    type='text'
                    id='date'
                    value={date}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Yakunlanish Sanasi'
                />
                <input 
                    type='text'
                    id='group'
                    value={group}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Guruh Raqami'
                />
                <input 
                    type='text'
                    id='students'
                    value={students}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Talabalar Soni'
                />
                <input 
                    type='text'
                    id='skill'
                    value={skill}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='O`quvchilar Ozlashtirishi'
                />
                <button type='submit' className='btn btn-outline-info'>Qo`shish</button>
            </form>
        </div>
    )
}

export default AddStudent;