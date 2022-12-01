import { createSlice } from '@reduxjs/toolkit'
import { studentsData, guruhCards } from '../assets/MenuData';

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        studentsData,
        guruhCards
    },
    reducers: {
        addStudent: (state, action) => {
            state.studentsData.push(action.payload)
        },
        addGroup: (state, action) => {
            state.guruhCards.push(action.payload)
        },
    }
})

export const { addStudent, addGroup } = studentsSlice.actions

export default studentsSlice.reducer;