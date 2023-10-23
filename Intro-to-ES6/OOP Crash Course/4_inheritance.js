// Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummery = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// getSummery
Book.prototype.getSummery = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;

};