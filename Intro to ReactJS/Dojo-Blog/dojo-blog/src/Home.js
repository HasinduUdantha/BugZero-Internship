import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  //let name = "mario";
  //     const [name, setName] = useState('mario')
  //     const [age,setAge] = useState(23)

  //   const handleClick = () => {
  //     setName('luigi');
  //     setAge('25');

  //   };

  return (
    <div className="home">
      <h2></h2>

      {/* <p>{ name } is { age } old </p>
      <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
};

export default Home;
