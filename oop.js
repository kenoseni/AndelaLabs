Exports.Customer = function(name){
  balance = 0;
  amount = 0
  this.Name = name;
  this.withdraw = function(amount){
    if(amount > this.balance){
      return;
    }else{
      balance -= amount;
      return this.Balance;
    }
  };
  this.deposit = function(amount){
    balance += amount;
    return this.Balance;
  };
};