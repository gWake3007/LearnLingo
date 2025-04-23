// import { db } from '../api/firebaseAPI.js';
// import { collection, addDoc } from 'firebase/firestore';

// // Функція для завантаження JSON у Firestore
// export const importTeachers = async () => {
//   try {
//     // Отримуємо файл quizzes.json
//     const response = await fetch('/teachers.json');
//     const teachers = await response.json();

//     // Додаємо кожен квіз у Firestore
//     for (const teacher of teachers) {
//       await addDoc(collection(db, 'teachers'), teacher);
//     }

//     console.log('📦 JSON імпортовано у Firestore!');
//   } catch (error) {
//     console.error('❌ Помилка імпорту:', error);
//   }
// };
