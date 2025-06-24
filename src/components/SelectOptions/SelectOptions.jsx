// import css from './SelectOptions.module.css';
// import { useState, useMemo } from 'react';
// import { selectTeachers } from '../../redux/teachers/selectors.js';
// import { useSelector } from 'react-redux';

// const SelectOptions = () => {
//   const teachers = useSelector(selectTeachers);

//   const uniqueLanguages = useMemo(() => {
//     const all = teachers.flatMap(t => t.languages || []);
//     return [...new Set(all)].sort();
//   }, [teachers]);

//   const uniquePrices = useMemo(() => {
//     const all = teachers.map(t => t.price_per_hour);
//     return [...new Set(all)].sort((a, b) => a - b);
//   }, [teachers]);

//   const uniqueLevels = useMemo(() => {
//     const allLevels = teachers.flatMap(t => t.levels || []);
//     return [...new Set(allLevels)].sort();
//   }, [teachers]);

//   const [filters, setFilters] = useState({
//     languages: '',
//     levelOfKnowledge: '',
//     price: '',
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className={css.container}>
//       <div className={css.lagnContainer}>
//         <label htmlFor="languages">Languages</label>
//         <select
//           id="languages"
//           name="languages"
//           value={filters.languages}
//           onChange={handleChange}
//         >
//           <option value="">Select</option>
//           {uniqueLanguages.map(lang => (
//             <option key={lang} value={lang}>
//               {lang}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={css.langLevelContainer}>
//         <label htmlFor="levelOfKnowledge">Level of knowledge</label>
//         <select
//           id="levelOfKnowledge"
//           name="levelOfKnowledge"
//           value={filters.levelOfKnowledge}
//           onChange={handleChange}
//         >
//           <option value="">Select</option>
//           {uniqueLevels.map(level => (
//             <option key={level} value={level}>
//               {level}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={css.priceContainer}>
//         <label htmlFor="price">Price</label>
//         <select
//           id="price"
//           name="price"
//           value={filters.price}
//           onChange={handleChange}
//         >
//           <option value="">Select</option>
//           {uniquePrices.map(price => (
//             <option key={price} value={price}>
//               {price}$
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;

import css from './SelectOptions.module.css';
import { useState, useMemo } from 'react';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import { useSelector } from 'react-redux';

const SelectOptions = () => {
  const teachers = useSelector(selectTeachers);

  const uniqueLanguages = useMemo(() => {
    const all = teachers.flatMap(t => t.languages || []);
    return [...new Set(all)].sort();
  }, [teachers]);

  const [filters, setFilters] = useState({
    languages: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <label htmlFor="languages">Languages</label>
        <div className={css.customSelect}>
          <select
            id="languages"
            name="languages"
            value={filters.languages}
            onChange={handleChange}
            onClick={toggleOpen}
            onBlur={() => setIsOpen(false)}
          >
            <option value="">Select</option>
            {uniqueLanguages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <svg
            className={`${css.arrowIcon} ${isOpen ? css.rotated : ''}`}
            width="20"
            height="20"
          >
            <use href="../../../public/header/arrow.svg#selectArrow"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;
