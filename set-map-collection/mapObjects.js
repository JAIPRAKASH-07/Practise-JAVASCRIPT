const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' }
  ];
  
  const userNames = users.map(user => user.name);
  
  console.log(userNames);  // Output: ['John', 'Jane', 'Alice']
      