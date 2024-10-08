function findFactors(num: number): number[] {
  //"number" and "number[]"added
  let factors: number[] = []; //"number[]" added
  for (let factor: number = 2; factor <= num / 2; factor++) {
    //"number" added
    if (num % factor === 0) {
      factors.push(factor);
    }
  }
  return factors;
}

function leapYear(year: number): boolean {
  //"number" and "boolean" added
  if (year % 400 === 0) {
    console.log("Leap Year");
    return true;
  } else if (year % 100 === 0) {
    console.log("Not a Leap Year");
    return false;
  } else if (year % 4 === 0) {
    console.log("Leap Year");
    return true;
  } else {
    console.log("Not a Leap Year");
    return false;
  }
}

function rnaTranscription(dna: string): string {
  //dna can be string, string[] OR Array<"G"|"C"|"T"|"A">
  let rna: string = "";
  for (let nucleotide of dna) {
    switch (nucleotide) {
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
      default:
        throw new Error(`The nucleotide ${nucleotide} does not exist`);
    }
  }
  return rna;
}

console.log(rnaTranscription("CG"));

function factorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1;
  }
  return factorial(number - 1) * number;
}

const timeoutHandler: () => void = () => {
  console.log("Timeout happens!");
};

const timeout: number = 1000;

setTimeout(timeoutHandler, timeout);

const someValue: (number | null) = Math.random() > 0.5 ? 12 : null;

// type Teacher = {
//     name: string,
//     age: number,
//     students: [
//       { name: string, age: number },
//       { name: string, age: number },
//       {
//         name: string,
//         age: number,
//         exercises: [{ score: number, date: Date }],
//       },
//     ],
//   };
// const peter: Teacher= {
//     name: "Peter",
//     age: 50,
//     students: [
//       { name: "Andy", age: 20 },
//       { name: "Bob", age: 23 },
//       {
//         name: "Charlie",
//         age: 25,
//         exercises: [{ score: 60, date: new Date("2019-01-05") }],
//       },
//     ],
//   };

const peter: {
  name: string;
  age: number;
  students: {
    name: string;
    age: number;
    exercises?: { score: number; date: Date }[];    // "?" means it is optional
  }[];
} = {
  name: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};
