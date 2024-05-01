// // import React from "react";
// function Coding2(){
//     const names = ['Brian', 'Paul', 'Krug', 'Halley', 'Sakshi', 'Mahesh', 'Rishav'];
//     const listItem = names.map((name)=><li>{name}</li>);
//     return(
//         <>
//         <ul>{listItem}</ul>
        
//         </>
//     )
// }
// export default Coding2;


function Coding2() {
    // Array of names
    const names = ['Brian', 'Paul', 'Krug', 'Halley', 'Sakshi', 'Mahesh', 'Rishav'];

    // Mapping over the names array to create list items
    const listItem = names.map((name,index) => <li key={index}>{name}</li>);

    // Returning JSX with the list of items wrapped in an unordered list
    return (
        <>
            <ul>{listItem}</ul>
        </>
    );
}

export default Coding2;
