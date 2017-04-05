 export function selectBook (book){
   return {
     type: "BOOK_SELECTED", //uppercase
     payload: book
   }
 }
