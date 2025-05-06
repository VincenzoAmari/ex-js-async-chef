async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeData = await recipeResponse.json();

    // console.log(recipeData);

    const userId = recipeData.userId;
    // console.log("User ID:", userId);

    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const userData = await userResponse.json();

    const birthDate = userData.birthDate;
    return birthDate;
    // console.log("Data di nascita dello chef:", birthDate);
    // console.log(userData);
  } catch (error) {
    console.error("errore nel recupero della ricetta", error);
    throw error;
  }
}

getChefBirthday(1).then((date) =>
  console.log("data di nascita dello chef è:", date)
);
