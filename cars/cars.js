function Car() {
  this.name = '';
  this.color =  '';
  this.brand =  '';

  this.setColor = function(color){
      this.color = color;
      return this;
  }

  this.setName = function(name){
      this.name = name;
      return this;
  }

  this.setBrand = function(brand){
      this.brand = brand;
      return this;
  }

  this.save = function(){
      document.write(`${this.name} ${this.color} and ${this.brand}`)
      return this;
  }
}

let car = new Car()
        .setBrand('BMW')
        .setColor('red')
        .setName('X5')
        .save();
