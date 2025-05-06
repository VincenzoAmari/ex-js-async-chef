async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeData = await recipeResponse.json();

    console.log(recipeData);
  } catch (error) {
    console.error("errore nel recupero della ricetta", error);
  }
}
