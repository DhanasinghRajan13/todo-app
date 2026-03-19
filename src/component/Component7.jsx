
import { useContext } from "react";
import { myContext } from "./component5";
function Userlist(){


    const users = [
 { id:1, name:"John", email:"john@gmail.com"},
 { id:2, name:"Sara", email:"sara@gmail.com"}
]
    return<Parent user={users[1]}/>


    function Parent({user}){

        return<Child user={user}/>
    }

    function Child({user}){

        return<Grandchild user={user}/>

    }

    function Grandchild({user}){

        return<h1>hello!{user.name}</h1>

    }
}
export default Userlist;

// import { useContext } from "react";
// import { myContext } from "./component5";
// export function Child(){
//     const user=useContext(myContext)

//     return<h1>hello!{user}</h1>
// }
