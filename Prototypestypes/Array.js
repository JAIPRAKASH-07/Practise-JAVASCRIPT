
Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
      this.sort();
      console.log(this);
      
    }
  };

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

