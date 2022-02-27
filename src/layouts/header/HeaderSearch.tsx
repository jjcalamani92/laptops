import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderSearch_5 = () => {
    return (
        <form action="" className="search">
            <input
            type="search"
            name=""
            placeholder="Busca aquí..."
            id="search-box"
            />
            <label>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            </label>
        </form>
    )
}
