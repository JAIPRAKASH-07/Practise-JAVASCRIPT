const dates = ['2022-01-01', '2022-05-15', '2023-08-09'];
const formatted = dates.map(date => new Date(date).toLocaleDateString());
console.log(formatted);  // Output: ['1/1/2022', '5/15/2022', '8/9/2023']
