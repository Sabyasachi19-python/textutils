import './App.css';


let user_name = "Sabyasachi";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <div className="container">
          <h1>Hello {user_name}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus beatae sit reiciendis aliquam exercitationem corrupti veniam nisi, assumenda, suscipit maxime neque nobis sint? Sunt, mollitia? Laborum, minima! Minus officia quia pariatur animi in.
        </div>
      </nav>
      <div className="blank">New Div</div>
    </>
  );
}

export default App;
