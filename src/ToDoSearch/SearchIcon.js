import { ReactComponent as SearchSVG } from './Search.svg';
import '../ToDoIcon/ToDoIcon.css'

function SearchIcon() {
  return (
    <span className="Search-icon-container">
      <SearchSVG className="Search-icon" />
    </span>
  );
}

export { SearchIcon };