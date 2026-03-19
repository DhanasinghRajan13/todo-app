// import React, { useState } from 'react'

// function Component6() {
//     const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "David" },
//   { id: 4, name: "Alex" },
//   { id: 5, name: "Daniel" }
// ];


// const[search,setSearch]=useState("")

//     const filtered=users.filter((user)=>(
//         user.name.toLowerCase().includes(search.toLowerCase())
//     ))

//   return (
//     <div>
//         <h1>user search</h1>
//         <input name='searchBar'onChange={(e) => setSearch(e.target.value)} />


//         {filtered.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}


//     </div>
//   )
// }

// export default Component6;