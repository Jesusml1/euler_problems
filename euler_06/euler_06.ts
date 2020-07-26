
const generator = (limit:number) => {
  let numbers:number[] = [];
  for(let i = 0; i < limit; i++){
    numbers.push(i + 1);
  }
  return numbers;
}

const sample = generator(100);

const SquareSum = (numbers:number[]): number => numbers.map(number => Math.pow(number, 2)).reduce((a, b) => a + b);
const SumSquare = (numbers:number[]): number => Math.pow(numbers.reduce((a, b) => a + b), 2);
  
console.log(SumSquare(sample) - SquareSum(sample));