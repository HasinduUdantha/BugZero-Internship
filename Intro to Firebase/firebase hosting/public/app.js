document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();

  const productsRef = db.collection("products");

  const query = productsRef.where("price", ">", 10);

  query.get().then((products) => {
    products.forEach((doc) => {
      data = doc.data();
      document.write(`${data.name} at ${data.price} <br>`);
    });
  });
});

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       const user = result.user;
//       document.write(`Hello ${user.displayName}`);
//       console.log(user);
//     });
//
