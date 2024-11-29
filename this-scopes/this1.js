
	// Function that contains this.
	function myFunc() {
		console.log(this.a);
	}

	var a = "Global";

	// Owner of the function.
	var myObj1 = {
		a: "myObj1",
		myFunc: myFunc
	};

	// Object other than the owner.
	var myObj2 = {
		a: "myObj2"
	};

	// Call the function in Global Scope.
	myFunc();

	// Call the function from the reference of owner.
	myObj1.myFunc();

	// Call the function from the reference
	// of object other than the owner.
	myFunc.call(myObj2);

	// Create a new undefined object.
	new myFunc();
