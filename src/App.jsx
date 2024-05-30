import App from '../../react-conditionals/src/App';
import './App.css'
// import SearchBar from '../Components/SearchBar'

function MyApp() {

const username = 'Employee';
const imgUrl = "https://i.stack.imgur.com/pEihy.png";

function SearchBar (){
  <form action="/action_page.php">
  <label></label>
  <input type="search" id="esearch" name="esearch" />
  <input type="submit" />
</form>
}

function Header() {
  return (
<header>
  <h2>Main Page Title</h2>
</header>
  );
}
//========== Main =======///

return (
  <div className='employeeDirectory'>
      <h3>Employee Directory</h3>
      <SearchBar />
      <form action="/action_page.php">
  <label></label>
  <input type="search" id="esearch" name="esearch" />
  <input type="submit" />
</form>
      <Header />
      <img src={imgUrl} alt={BreakingBadDude} />
      <ul>Username: {username} {new Date().getTime()}</ul>
      <ul>Username: {username} {new Date().getTime()}</ul>
      <ul>Username: {username} {new Date().getTime()}</ul>
    </div>
  );
}

export default App