

// function getUsers() {
//     //database
//     let users = [];

//             users = [
//                 { username: 'john', email: 'john@test.com' },
//                 { username: 'jane', email: 'jane@test.com' },
//                 { username: 'Anil', email: 'anil@test.com' },
//             ];      

//     return users;
// }

// function getUsers() {
//     //database
//     let users = [];

//         //make a request to dabase 
//         setTimeout(()=>{
//             users = [
//                 { username: 'john', email: 'john@test.com' },
//                 { username: 'jane', email: 'jane@test.com' },
//                 { username: 'Anil', email: 'anil@test.com' },
//             ];
//         } , 3000);//3sec       

//     return users;
// }


// function findUser(name) {
//         const usersindb = getUsers();   
//         //const user = users.find((user) => user.username === name);

//         for(let i =0; i<usersindb.length; i++){
//             let user = usersindb[i];
//             if(user.username === name){
//                 return user;
//             }
//         }
//         return "No user exist";   
//     }

//    let usr = findUser('Anil');
//    console.log(usr);
   
let isDataExistinDb = true;
function getUsersWithPromise() {
    //database
    let users = [];

    let promise = new Promise((resolve, reject) => {

        //make a request to dabase 
        //if db retun data as response then call resolve function
        //else db not connected or no data retun data then call reject function
        
        setTimeout(()=>{
            if(isDataExistinDb){
                users = [
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                    { username: 'Anil', email: 'anil@test.com' },
                ];
                resolve(users);
            }else{
                let err = new Error('So Sorry, No Database connection');
                reject(err);
            }            
        } , 5000);//5sec            

    });

    return promise;
}


function findUserWithPromise(name) {
    const usersindbpromise = getUsersWithPromise(); 
let founduser;
    usersindbpromise.then((userList)=>{
        for(let i =0; i<userList.length; i++){
            let user = userList[i];
            if(user.username === name){
              // console.log(user);      
              founduser = user;       
            }
        }

    if(founduser){
        console.log("User Found");
        console.log(founduser);
    }else{
        console.log("User Not Found");
    }

    },
    (err)=>{
        console.log(err);        
    }
);
}

findUserWithPromise('jane');
