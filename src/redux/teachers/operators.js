import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-hot-toast';
import { db } from '../../api/firebaseAPI.js';
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const teachersData = await getDocs(collection(db, 'teachers'));
      return teachersData.docs.map(teacher => ({
        id: teacher.id,
        ...teacher.data(),
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTeacherById = createAsyncThunk(
  'teachers/fetchTeacherById',
  async (_, { rejectWithValue }) => {
    try {
      const teacherRef = doc(db, 'teachers', id);
      const teacher = await getDoc(teacherRef);
      if (teacher.exists()) {
        return { id, ...teacher.data() };
      } else {
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
