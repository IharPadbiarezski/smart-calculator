class SmartCalculator {
  constructor(initialValue) {
    this.number = String(initialValue); 
  }

  add(number) {
    this.number = this.number + '+' + number;    
    return this;
  }
  
  subtract(number) {
    this.number = this.number + '-' + number;    
    return this;
  }

  multiply(number) {
    this.number = this.number + '*' + number;    
    return this;
  }

  devide(number) {
    this.number = this.number + '/' + number;    
    return this;
  }

  pow(number) {
    this.number = this.number + '**' + number;
    return this;
  }

  valueOf() {    
    return eval(this.number);
  }

}

module.exports = SmartCalculator;
