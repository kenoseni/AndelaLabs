function getPrimes(N){
  var numbers = [];
  var prime = [];
  var squareRoot = Math.sqrt(N);
  for(var i = 2; i < squareRoot; i++){
    if(!numbers[i]){
      for(var k = i * i; k < N; k+=i){
        numbers[k] = 'replace';
      }
    }
  }
  for(i = 2; i < N; i++){
    if(!numbers[i]){
      prime.push(i);
    }
  }
  return prime;
}