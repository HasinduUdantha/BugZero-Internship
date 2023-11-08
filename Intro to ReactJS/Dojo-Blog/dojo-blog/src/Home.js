// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null)
// //     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
// //     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
// //     {
// //       title: "Web dev top tips",
// //       body: "lorem ipsum...",
// //       author: "mario",
// //       id: 3,
// //     },
// //   ]);

//   const [name, setName] = useState("mario");

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };

//   useEffect(() => {
//     console.log("use effec run");
//     console.log(name)
//   }, [name]);

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//       {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
//       <button onClick={() => setName('luigi')}>change name</button>
//       <p>{name}</p>
//     </div>
//   );
// };

// // export default Home;
// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null)

//   useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         setBlogs(data);
//       })
//   }, [])

//   return (
//     <div className="home">
//       {blogs && <BlogList blogs={blogs} />}
//     </div>
//   );
// }
 
// export default Home;
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;