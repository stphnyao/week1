pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  

   // Constraints.  
   var x = a * b;
   x += a * b;
   var y = x * c;
   y += x * c;
   // Using assignment operator assuming constraint operators are valid
   d <-- x * y;
}

component main = Multiplier3();