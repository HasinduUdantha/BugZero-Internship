// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

//console.log(window)

// console.log(navigator); 


// // Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2023',
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.title)