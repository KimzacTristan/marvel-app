import { useState } from "react";
import { DetailCharacter } from "./DetailCharacter";

export function CharactersList({ characters = []}) {
  // use state to store the index of the selected character
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  // handleOnClick is a function that will be called when the user clicks on a character
  // it will receive the index of the character as a parameter
  const handleOnClick = (index) => {
    // set the index of the selected character
    setSelectedCharacter(index);
  };

  return (
    <>
      <ul>
        {characters.map((character, index) => (
          <li key={character.id} onClick={() => handleOnClick(index)}>{character.name}</li>
        ))}
      </ul>
      < br/>
      <DetailCharacter character={characters[selectedCharacter]} />
    </>
  );
}
