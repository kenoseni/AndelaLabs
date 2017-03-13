var prime = require("../../app/prime")

describe('Prime Numbers from an integer: ', function () {
	describe("Return the prime numbers from an integer as a list as follows '[prime, prime, prime,]'", function(){

        it("should return [2, 3, 5, 7] for 10", function(){
			expect(prime.getPrimes(10)).toEqual([2, 3, 5, 7]);
		});

		it("should return '[]' for 1", function () {
			expect(prime.getPrimes(1)).toEqual([]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 23, 29] for 30", function() {
			expect(prime.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 23, 29]);
		});

		it("should return [] for -5", function (){
			expect(prime.getPrimes(-5)).toEqual([]);
		});

		it("should return [] for 'strings'", function (){
			expect(prime.getPrimes("prime")).toEqual([]);
		});

		it("should return [] for 0", function (){
			expect(prime.getPrimes(0)).toEqual([]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47] for 50", function (){
			expect(prime.getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47]);
		});
		

		it("should return [2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47, 53, 57, 59] for 60", function (){
			expect(prime.getPrimes(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47, 53, 57, 59]);
		});


	});
});
