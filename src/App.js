import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header";
import Main from './component/Main/Main';


function App() {
/*  const [data , setData] = useState();
 useEffect(()=> {
  fetch('./myData.JSON')
  .then(res=> res.json())
  .then(programer => setData(programer))

 } ,[]) */

  return (
    <div className="App">
     <Header> </Header>
     <Main></Main>
    </div>
  );
}

export default App;
