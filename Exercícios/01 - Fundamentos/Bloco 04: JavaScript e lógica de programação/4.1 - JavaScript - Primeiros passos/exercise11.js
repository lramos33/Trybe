const grossSalary = 3000.00;
let INSS = 0;
let IR = 0;

if (grossSalary <= 1556.94) {
  INSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.12) {
  INSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  INSS = grossSalary * 0.11;
} else {
  INSS = 570.88
}

const baseSalary = grossSalary - INSS;

if (baseSalary <= 1903.98) {
  IR = 0;
} else if (baseSalary <= 2826.65) {
  IR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  IR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  IR = (baseSalary * 0.225) - 636.13;
} else {
  IR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário líquido: " + (baseSalary - IR));