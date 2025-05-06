import dayjs from "dayjs";

async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!recipeResponse.ok) {
      throw new Error(`Ricetta con id ${id} non trovata`);
    }

    const recipeData = await recipeResponse.json();
    // console.log(recipeData);
    const userId = recipeData.userId;
    // console.log("User ID:", userId);

    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error(`Utente con id ${userId} non trovato`);
    }
    const userData = await userResponse.json();

    const birthDate = userData.birthDate;
    const formattedDate = dayjs(birthDate).format("DD/MM/YYYY");

    return formattedDate;
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
