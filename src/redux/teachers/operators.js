import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../api/firebaseAPI.js';
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';
