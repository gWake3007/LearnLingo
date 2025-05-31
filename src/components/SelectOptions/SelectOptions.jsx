import css from './SelectOptions.module.css';
import { useState } from 'react';

const SelectOptions = () => {
  const [language, setLanguage] = useState('');
  const [levelOfKnowledge, setLevelOfKnowledge] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeLanguage = e => {
    setLanguage(e.target.value);
  };

  const handleChangeLevelOfKnowledge = e => {
    setLevelOfKnowledge(e.target.value);
  };

  const handleChangePrice = e => {
    setPrice(e.target.price);
  };

  return (
    <div className={css.container}>
      <div className={css.lagnContainer}>
        <label htmlFor="languages">Languages</label>
        <select id="languages" value={language} onChange={handleChangeLanguage}>
          <option value="">Select</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="mandarinChinese">Mandarin Chinese</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="italian">Italian</option>
          <option value="korean">Korean</option>
        </select>
      </div>
      <div className={css.langLevelContainer}>
        <label htmlFor="levelOfKnowledge">Level of knowledge</label>
        <select
          id="{levelOfKnowledge}"
          value={levelOfKnowledge}
          onChange={handleChangeLevelOfKnowledge}
        >
          <option value="">Select</option>
          <option value="beginner">A1 Beginner</option>
          <option value="elementary">A2 Elementary</option>
          <option value="intermediate">B1 Intermediate</option>
          <option value="upperIntermediate">B2 Upper-Intermediate</option>
          <option value="advanced">C1 Advanced</option>
          <option value="proficient">C2 Proficient</option>
        </select>
      </div>
      <div className={css.priceContainer}>
        <label htmlFor="price">Price</label>
        <select id={price} value={price} onChange={handleChangePrice}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default SelectOptions;
