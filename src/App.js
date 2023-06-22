import './App.css';


let name = "Anas";

function App() {
  return (
    <>
      <div className="main">
        <h1>My Name is {name}</h1>
        <form action='http://localhost:80/getData.php' method='POST'>
          <label htmlFor="userN">Username : </label>
          <input type="text" name="username" id="userN" placeholder="Enter Your Name"/>
          <input type="submit" name="submit"/>
        </form>
        <img src=""/>
      </div>
    </>
  );
}

export default App;
