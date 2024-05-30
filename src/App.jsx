import employeeList from '../Components/employeeList'
import './App.css'


function App() {

const username = 'Employee';
const imgUrl = "https://i.stack.imgur.com/pEihy.png";

function SearchBar (){
  <form action="/action_page.php">
  <label></label>
  <input type="search" id="esearch" name="esearch" />
  <input type="submit" />
</form>
};


//========== Main =======///

return (
<div className='Homepage'> 
  <h2>Employee Directory</h2>
  <form action="/action_page.php">
  <input type="search" id="esearch" name="esearch" />
  <input type="submit" />
  <employeeList/>
</form >

</div>
  )
}

export default App

