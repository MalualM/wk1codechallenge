function netSalaryCalculator(basicSalary,benefits){
    // constants for values and rates
    let taxableIncome=24000;
    // rate (10%)
    let taxRate=0.1;
    // calculate gross salary
    let grosSalary=basicSalary+benefits;
    // calculate payee
    let payee=(grosSalary-taxableIncome)*taxRate;
    // NHIF rate (2.75%)
    let nhifRate=2.75;
    // calculate NHIF deduction
    let nhifDeduction=grosSalary*nhifRate;
    // NSSF rate(6%)
    let nssfRate=0.06;
    // calculate NSSF deduction
    let nssfDeduction=grosSalary*nssfRate;
    // calculate netsalry
    let netSalary=grosSalary-payee-nhifDeduction-nssfDeduction;
    return {
      netSalary
    }
}
let basicSalary=40000;
let benefits=10000;
let results=netSalaryCalculator(basicSalary,benefits);
console.log(results);