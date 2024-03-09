

import Button from "./Button";
const Item = ()=>{

    // let name = "Roman";

    const arr =[{
        'name':"Roman",
        'pos':"Teacher",
        'age':17

    },
    {
        'name':"Vasia",
        'pos':"Cleaner",
        'age':47
        
    },

    {
        'name':"Dima",
        'pos':"Student",
        'age':21
        
    }];

    const newArr = [...arr, {
        'name':"Darina",
        'pos':"Student",
        'age':21

    }];

    const content = newArr.map(
       (intttt)=>{

       //let doubEl = intttt*2;
     return(
        <>
        <h1>{intttt.age}</h1>
        <p>The element form the array  {intttt.name}</p>
        <Button/>
        </>
     )

  }


    )

     

    return(
        content

    )



}

export default Item;