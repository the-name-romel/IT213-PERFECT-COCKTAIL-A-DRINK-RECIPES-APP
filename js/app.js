// Instantiate the class
const ui = new UI();


// Create the Event Listeners
function eventListeners(){

    // add event listeners when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }
}

eventListeners();




// Get cocktails function
function getCocktails(e){
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;

    // Check something is on the search input
    if(searchTerm === ''){
        // Call user interface print message
        ui.printMessage('Please add something into the form', 'danger');
    }else {
        console.log('Query the REST API');
    }
}