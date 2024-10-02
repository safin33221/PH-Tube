//create load categoris

const loadCategories = () => {
    //fetch the data 

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => dispalyCategories(data.categories))
    .catch(error => console.error('error:',error))
}

//Create display categoris

const dispalyCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categories.forEach((item) => {
        console.log(item);
        //Create button for categories
        const button = document.createElement('button');
        button.classList ='btn';
        button.innerText = item.category;
        

        // add button in categroy container

        categoryContainer.append(button)
    });
}




loadCategories()