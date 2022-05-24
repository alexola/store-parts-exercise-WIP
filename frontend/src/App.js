
/*import './App.css';*/
import Store from "./components/Store";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  
  const [storeItem, setStoreItem] = useState([ ]);
  
  const apiCall = axios.create({
    baseURL: "http://localhost:8081/store/parts" 
  })

  useEffect(() => {
      apiCall.get().then((response) => {
         setStoreItem(response.data);
      });
  }, [ ])


  return (
    <div className="App" >
      <Store  items={storeItem} 
        onItemSort={(itemData) =>
         setStoreItem([...storeItem, itemData])
        }
      />
    </div>

  );
}


export default App;
