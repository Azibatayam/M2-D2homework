
//<!-- MANDATORY JS EXERCISES (create a different file for this exercise)
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
//     2) Create an unordered list using JavaScript and save it in a variable
//     3) Cycle the array and create a list-item via JavaScript for every element
//     4) Insert the genere as text in the list-item
//     5) Append the list items in the unordered list
//     6) Append the unordered list in the document. The list should appear in the page.
// //-->


var  genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]



let list = document.createElement("ul")

for(let i=0;i<genres.length;i++){
    let listItem = document.createElement("li")
    listItem.innerText = genres[i]
    list.appendChild(listItem)
}
document.body.appendChild(list)

function genres(){

}




