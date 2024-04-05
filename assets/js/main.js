/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)
*/
/*1) Import songs array using modules.*/
import songs from "./songs.js";
console.log("Import 1)", songs);

/*2. Use the map function to create a new array with the title of each song in uppercase letters.*/
const mayus = songs.map((song) => {
    const tituloMayus = song.title.toLocaleUpperCase();
    return tituloMayus;
  });
  
  console.log("2)", mayus);
/*3. Use the filter function to create a new array with all the songs released before 1975.*/
const pelisViejas = songs.filter((song)=> {
return song.year < 1975 ? song : false;
});
console.log("3)", pelisViejas);


/*4. Use destructuring to create a variable that stores the title of the first song in the array.*/
const {title: primerTitulo } = songs[0];
console.log("4)", primerTitulo);

/*5. Use the find function to get the object representing the song "Hotel California".*/
const hotelCal = songs.find((songTitle) => {
    return songTitle.title === "Hotel California" ? songTitle : false;
  });
console.log("5)", hotelCal);


/*6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)*/

/*7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.*/
const tituloString = songs.map((song) => {
    const titulo = song.title;
    const artista = song.artist;
    const anio = song.year;
    return `${titulo} - ${artista} (${anio})`;
  });
  
  console.log("7)", tituloString);

/*8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.*/
//NO PUDE
const cancion = songs.filter((song)=> {
 return song.artist == 'The Beatles' ? song : false;

    });


console.log("8)", cancion);

/*9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)*/

/*10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)*/

/*11. Use the find function to get the object representing the song with the longest title.*/

/*12. Use destructuring and template literals to log the title, artist and year of the first element of the array.*/
const { title, artist, year} = songs[0];
console.log("12)", `${title} - ${artist} - ${year}`)

/*13. Use the rest operator to create a new array without the first element.*/
const {title: tituloPrueba, ...restData} = songs[0];
const sinTitulo = {
    ...restData,
};
console.log("13)", sinTitulo);

/*14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.*/
//NO PUDE
import filter from "./utils.js";
console.log("prueba", filter);
const love = songs.find((songTitle) => {
    return songTitle.title === "love" ? songTitle : false;
  });

  

/*15. Use the every() method to check if all the songs have titles that are 5 or more characters long.*/


/*16. Use the some() method to check if there are any songs from the 80s.*/

/*17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."*/
const { title:title8, artist: art8, year: year8 } = songs[8];
console.log("17)", ` ${art8} released ${title8} in ${year8}`)

/*18. Use the map() method to create a new array with just the artist names.*/
const artistNames = songs.map((artista) => {
   return  { artist } = artista;
});
console.log("18)", artistNames);
/*19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.*/
//NO PUDE
function randomMovie(){

}
console.log("19)", randomMovie());
console.log("19)", randomMovie());
console.log("19)", randomMovie());


/*20. Write your own function using at least 3 concepts.*/

