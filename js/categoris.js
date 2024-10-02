// load categoriesVideos
const loadCategoryVideos = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => dispalyVideo(data.category))
    .catch(error => console.error('error:',error))
}
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
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button onclick="loadCategoryVideos(${item.category_id})" class="btn py-3">
            ${item.category}
        </button>
        `
        

        // add button in categroy container

        categoryContainer.append(buttonContainer)
    });
}




loadCategories()