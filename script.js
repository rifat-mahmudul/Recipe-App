const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener("click", () => {
    const inputSearch = document.getElementById('inputSearch').value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`)
    .then(res => res.json())
    .then(data =>{
        const recipes = data.meals;
        console.log(recipes)
        if(recipes){
            const recipeContent = document.getElementById('recipeContent');

            recipes.forEach(recipe => {
                recipeContent.innerHTML = `
                    <h3>${recipe.strMeal}</h3>
                    <img src="${recipe.strMealThumb}" height="500px" width="100%" style="border-radius: 10px">
                    <p>${recipe.strInstructions}</P>
                `;
            });

            document.getElementById('inputSearch').value = "";

        }

        else{
            recipeContent.innerHTML = `
                <p>NO Recipe Found</p>
            `
            document.getElementById('inputSearch').value = "";
        }

        inputSearch = "";
    })
})