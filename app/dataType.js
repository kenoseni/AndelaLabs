exports.dataTypes = function (arr){
  if(arr === undefined || arr === null){
    return 'no value';
  }
  if(arr === true){
    return true;
  }
  if(arr === false){
    return false;
  }
  if(typeof arr === 'number' & arr < 100){
    return 'less than 100';
  }
  if(typeof arr === 'number' & arr > 100){
    return 'more than 100';
  }
  if(typeof arr === 'number' & arr === 100){
    return 'equal to 100';
  }
  if(typeof arr === 'string'){
    return arr.length;
  }
  if(typeof arr === 'object'){
    return arr[2];
  }
  var callback = function(arg){
      if(arg === true){
        return 'called callback';
      }
  }
  if(typeof arr === 'function'){
    return arr(true);
  }
}
