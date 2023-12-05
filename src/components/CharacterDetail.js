import React from 'react';
import { format } from 'date-fns';

function CharacterDetail({ character = {} }) {
  // Fonction pour formater la date
  const formatModifiedDate = (isoDate) => {
    const date = new Date(isoDate);
    return format(date, 'MMMM dd, yyyy'); // Format de date souhaité
  };

  return (
    <div>
      <h2>{character.name}</h2>
      {character.thumbnail && (
        <img
          src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
          alt={character.name}
        />
      )}
      <p>{character.description}</p>
      <p>{formatModifiedDate(character.modified)}</p>
    </div>
  );
}

export default CharacterDetail;
