import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from './StudentsSlice';


const store = configureStore ({
    reducer: {
        students: studentsSlice
    }
})

export default store;