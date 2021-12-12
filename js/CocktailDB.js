class CocktailDB {

    // Save the recipes into local storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();
        
        drinks.push(drink);

        // Add the new array into the local storatge
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    getFromDB() {
        let drinks;
        // Check from local storage

        if(localStorage.getItem('drinks') ===  null) {
            drinks = [];
        } else {
            drinks = JSON.parse( localStorage.getItem('drinks') );
        }
        return drinks;
    }
}