import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export function CharactersList({ characters = [] }) {
  // Fonction pour formater la date avec date-fns
  const formatModifiedDate = (isoDate) => {
    const date = new Date(isoDate);
    return format(date, 'MMMM dd, yyyy'); // Format de date souhaité
  };

  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`}>
            <strong>{character.name} - </strong>
            {formatModifiedDate(character.modified)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
