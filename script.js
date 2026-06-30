console.log("Compound Intrest Calculations");

let P = 40000;  
let r = 7.72;       
let n = 1;      
let t = 3;       


let A = P * (1 + (r / 100) / n) ** (n * t);

// Display Output
console.log("Principal Amount: ₹" + P);
console.log("Rate of Interest: " + r + "%");
console.log("Time: " + t + " years");
console.log("Amount: ₹" + A);
console.log("The compound interest after " + t + " years is: " + A);

