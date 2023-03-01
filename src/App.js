import './App.css';
import {useState, useEffect} from 'react'
import herbs from './json/data.json'
import Header from './components/Header';
import Menu from './components/Menu';
import MainContainer from './components/MainContainer';
import Receipts from './components/Receipts';


function App() {

  const [data,setData]= useState([]);
  const [clickedItem,setClickedItem] = useState({});
  const [hide, setHide] = useState(false);

  const clickElement = (itemId) => {
    setHide(false);
    let element = data.filter(e=>e.id===itemId)
    setClickedItem(element[0]);
  };

  useEffect(()=>{
    let myArray = [];
    for(const herb in herbs){
        myArray.push(herbs[herb]);
    }
    setData(myArray);
  },[])

  const clickArrow = () => {   
    setHide(current => !current);
  };

  return (
    <div className="App">
      <Header />
      <div className = 'appMainContent'>
        <Menu clicked={clickElement} data={data}/>
        <MainContainer data={clickedItem} clicked={clickArrow} hide={hide}/>
        <Receipts data={clickedItem.recepti} hide={hide}/>
      </div>
    </div>
  );
}

export default App;
