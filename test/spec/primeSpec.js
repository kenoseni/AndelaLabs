

describe('Prime Numbers from an integer: ', function () {
	describe("Return the prime numbers from an integer as a list as follows '[prime, prime, prime,]'", function(){

        it("should return [2, 3, 5, 7] for 10", function(){
			expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
		});

		it("should return '[]' for 1", function () {
			expect(getPrimes(1)).toEqual([]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 23, 29] for 30", function() {
			expect(getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 23, 29]);
		});

		

		it("should return [2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47, 53, 57, 59] for 60", function (){
			expect(getPrimes(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 23, 29, 31,37, 41, 43, 47, 53, 57, 59]);
		});


	});
});
