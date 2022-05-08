import { InputField } from '../form/inputField/InputField';
import search from '../../assets/images/lens.svg';


/**
 * Renders the table search bar
 * @param {function} requestSearch
 * @returns {JSX}
 */
  export default function SearchBar  ({ requestSearch })  {
  

  const handleInputChange = (e) => {
    requestSearch(e.target.value);
  };

  return (
    <form onChange={handleInputChange}>
    <InputField
        input='search'
        type='search'
        placeholder='search' 
        
        />
      <img src={search} alt="" />
    </form>
  );
};