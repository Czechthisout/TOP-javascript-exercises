const getTheTitles = function(books) {
    let bookTitles=[];
    bookTitles=books.map(item => item.title);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
