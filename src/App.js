<<<<<<< HEAD

import logo from './logo.svg';
import './App.css';
import ListeCharacters from './component/liste';
import Title from './component/titre';
import NumberCharacters from './component/compteur';

const characters = require("./characters.json");

function App() {
return (
 <>
 {/* 
 La propriété id et data-demo sont passées au composant Title grâce au spread operator.
 La propriété color est définie dans le composant Title
 */}
 <Title color="black" id="my-id" data-demo="demo">Liste de personnage</Title>
 <ListeCharacters characters={characters}/>
 <NumberCharacters characters={characters}/>
</>
);
=======
//import { NumberOfCharacters } from './components/NumberOfCharacters';
//import { ListCharacters } from './components/ListCharacters';
//import { Header } from './components/Header';

//const characters = require('./data/characters.json');

//function App() {
  //return (
    //<>
     // <Header />
      //<NumberOfCharacters characters={characters} />
      //<br />
     // <ListCharacters characters={characters} />
   // </>
  //);
//}

//export default App;
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

// Create a router that uses the client side history strategy for
const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  );
>>>>>>> feature/routers
}

export default App;