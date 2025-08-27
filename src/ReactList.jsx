// function List () {
// const items = ['Apple', 'Banana', 'Cherry', 'helloo'];

// return(
//     <div>
//         <h1>Fruits Lists</h1>
//         <ul>
//            {items.map((item, idx)=>(
//             <li key={idx}>{item}</li>
//            ))}
//         </ul>
//     </div>
// )


// }

function List(){
    const cust = [
        {id : 1 , name : 'apon khan', age : 25},
        {id : 2 , name : 'salauddin ', age : 22},
        {id : 3 , name : 'ronit roy', age : 20},
        {id : 4 , name : 'Feroz', age : 16},
    ]

    return(
        <div>
            <h2>Customer information</h2>
            <ol>
                {cust.map((user, idx)=>(
                    // <li key={user.id}>Customer name : {user.name} and age of the customer {user.age}</li>
                    <li key={user.id}>{user.age > 18 ?  user.name : `${user.name} this user will not get the permission`  } </li>
                    
                ))}
            </ol>
        </div>
    )
}

function Company(){
    const comparnies = ['google', 'microsoft', 'openAi'];
   const hadleClick = (company)=>{
    return alert(`Congrats! you successfully visited ${company}`)
   }

    return(
        <div>
            <h3>See All Company details</h3>
            {comparnies.map((company, idx)=>(
                <button key={idx} onClick={()=>(hadleClick(company))}>{company}</button>
            ))}
        </div>
    )
}


export default Company;