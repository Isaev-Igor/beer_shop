import './App.css';
import React, { useState, useEffect }from 'react';
import Catalog from './Catalog';
import Pagination from "./Pagination";

function App() {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beerList] = useState(6);

  useEffect(()=>{
     const getItems = async function getUsers() {
 let response = await fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
 if (response.ok) {
   setLoading(true)
   let data = await response.json();
   setItem(data)
 } else {
   console.log('error', response.status);
 }
}
getItems();
}, []);

  console.log(items)

const lastItemIndex = currentPage * beerList;
const firstItemIndex = lastItemIndex - beerList;
const currentItem = items.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
    <Catalog currentItem={currentItem} loading={loading}/>
        <Pagination
            beerList={beerList}
            totalItems={items.length}
            paginate={paginate}
        />
    </div>
  );
}

export default App;
