import { createSlice } from '@reduxjs/toolkit'
import { studentsData } from '../assets/MenuData';

const studentsSlice = createSlice({
    name: 'students',
    initialState: studentsData,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { addStudent } = studentsSlice.actions

export default studentsSlice.reducer;