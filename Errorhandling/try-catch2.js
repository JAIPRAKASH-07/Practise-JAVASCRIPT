try {
    // Code that may throw an exception
    let result = undefined;
    console.log(result);
} catch (error) {
    // Handle the exception
   
    console.log("An error occurred: " + error.message);
} finally {
    // This block always executes
    console.log("This will always be executed.");
}
