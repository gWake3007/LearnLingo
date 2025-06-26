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

  const uniquePrices = useMemo(() => {
    const all = teachers.map(t => t.price_per_hour);
    return [...new Set(all)].sort((a, b) => a - b);
  }, [teachers]);

  const uniqueLevels = useMemo(() => {
    const allLevels = teachers.flatMap(t => t.levels || []);
    return [...new Set(allLevels)].sort();
  }, [teachers]);

  const [filters, setFilters] = useState({
    languages: '',
    levelOfKnowledge: '',
    price: '',
  });

  const [openSelect, setOpenSelect] = useState(null);

  const handleFocus = name => {
    setOpenSelect(name);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));

    setTimeout(() => {
      setOpenSelect(null);
    }, 150);
  };

  return (
    <div className={css.container}>
      <div className={css.languagesWrapper}>
        <label htmlFor="languages">Languages</label>
        <div className={css.customSelect}>
          <select
            id="languages"
            name="languages"
            value={filters.languages}
            onChange={handleChange}
            onFocus={() => handleFocus('languages')}
          >
            <option value="">Select</option>
            {uniqueLanguages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <svg
            className={`${css.arrowIcon} ${
              openSelect === 'languages' ? css.rotated : ''
            }`}
            width="20"
            height="20"
          >
            <use href="../../../public/header/arrow.svg#selectArrow"></use>
          </svg>
        </div>
      </div>

      <div className={css.levelOfKnowledgeWrapper}>
        <label htmlFor="levelOfKnowledge">Level of knowledge</label>
        <div className={css.customSelect}>
          <select
            id="levelOfKnowledge"
            name="levelOfKnowledge"
            value={filters.levelOfKnowledge}
            onChange={handleChange}
            onFocus={() => handleFocus('levelOfKnowledge')}
          >
            <option value="">Select</option>
            {uniqueLevels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <svg
            className={`${css.arrowIcon} ${
              openSelect === 'levelOfKnowledge' ? css.rotated : ''
            }`}
            width="20"
            height="20"
          >
            <use href="../../../public/header/arrow.svg#selectArrow"></use>
          </svg>
        </div>
      </div>

      <div className={css.priceWrapper}>
        <label htmlFor="price">Price</label>
        <div className={css.customSelect}>
          <select
            id="price"
            name="price"
            value={filters.price}
            onChange={handleChange}
            onFocus={() => handleFocus('price')}
          >
            <option value="">Select</option>
            {uniquePrices.map(price => (
              <option key={price} value={price}>
                {price}$
              </option>
            ))}
          </select>
          <svg
            className={`${css.arrowIcon} ${
              openSelect === 'price' ? css.rotated : ''
            }`}
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
