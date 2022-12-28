import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/store';
import { getSearchString } from '../../redux/store';
import { useSelector } from 'react-redux';

const SearchForm = () => {
    
    const searchString = useSelector(getSearchString);
    const [title, setTitle] = useState(searchString); // ('')
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(title));
        //setTitle('');
    }
    useEffect(() => {
        dispatch(updateSearchString(''))
    }, []);
    
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search…" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;