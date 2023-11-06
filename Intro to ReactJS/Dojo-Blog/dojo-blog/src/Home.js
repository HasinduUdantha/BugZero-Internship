import { useState } from 'react';


const Home = () => {
  //let name = "mario";
    const [name, setName] = useState('mario')
    const [age,setAge] = useState(23)

  const handleClick = () => {
    setName('luigi'); 
    setAge('25');
    
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } old </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
