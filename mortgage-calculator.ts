/**
 * Mortgage-Calculator is used in CalcBot
 * It takes three parameters:
  * loanAmount: How much money being borrowed from the bank in USD.
  * interestRate: The annual interest rate of the loan.
  * years: The amount of years to pay the loan back.
*/

// Calculate a monthly mortgage payment amount assuming a fixed rate loan
// Using the equation PMT = ( PV * i * (1 + i)^n ) / ( (1 + i)^n - 1 )
// Where PV is loanAmount, i is interestRate / 12 / 100, and n is years * 12
import Chatend from "chatend";

const { loanAmount, interestRate, years } = Chatend.input;
const monthlyInterestRate = interestRate / 12 / 100;
const totalPayments = years * 12;
const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
const monthlyPayment = numerator / denominator;

Chatend.done("Your monthly payment is $" + monthlyPayment.toFixed(0), {
  loanAmount,
  interestRate,
  years,
  monthlyInterestRate,
  totalPayments,
  monthlyPayment
});