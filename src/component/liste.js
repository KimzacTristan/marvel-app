// import data from "../characters.json"
// const characters = require("../characters.json");

function ListeCharacters({characters}){
    console.log(characters)
    return(<ul>
    {characters.map((item, index) => (
    <li key={index}>{item.name}</li> 
    ))}
    </ul>);
    }

export default ListeCharacters;