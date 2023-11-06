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
}

export default App;