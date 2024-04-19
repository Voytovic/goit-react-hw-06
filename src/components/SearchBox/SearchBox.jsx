import { useDispatch, useSelector } from 'react-redux';
import css from './searchBox.module.css';
import { selectFilterName, setFilterName } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filterValue = useSelector(selectFilterName);
  const dispatch = useDispatch();

  const handleChange = event => {
    const filter = event.target.value;
    dispatch(setFilterName(filter));
  };

  return (
    <div className={css.form}>
      <p className={css.filterInput}>Search</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
