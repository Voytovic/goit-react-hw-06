import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter({ inputValue: e.currentTarget.value }));
  };

  return (
    <div className={css['input-container']}>
      <label htmlFor="nameInput">Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css['input-search']}
        id="nameInput"
      />
    </div>
  );
}
