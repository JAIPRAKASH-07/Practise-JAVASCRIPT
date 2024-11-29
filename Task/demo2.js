

     const users = [
        { name: "Alice Johnson", phone: "123-456-7890", email: "alice.johnson@example.com", password: "password123" },
        { name: "Bob Smith", phone: "987-654-3210", email: "bob.smith@example.com", password: "mysecurepassword" },
        { name: "Carol White", phone: "555-123-4567", email: "carol.white@example.com", password: "passw0rd" },
        { name: "David Brown", phone: "444-555-6666", email: "david.brown@example.com", password: "david2024" },
        { name: "Eve Black", phone: "333-222-1111", email: "eve.black@example.com", password: "eve1234" }
    ];
    
   
    function findUser(email, password) {
        for (let user of users) {
            if (user.email === email && user.password === password) {
                return user;
            }
        }
        
    }
    
  
    const logedUser = findUser( "bob.smith@example.com","mysecurepassword");
    
    if (logedUser) {
        console.log(logedUser);
       
    } else {
        console.log("Invalid email or password.");
    }
    