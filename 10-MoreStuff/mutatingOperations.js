let e = [1, 2];
let f = e;
e.push(3, 4);

console.log(e); // > [ 1, 2, 3, 4 ]
console.log(f); // > [ 1, 2, 3, 4 ]

/*
the array is mutated by e, which also changed the array referenced by f

reminder:
> objects (and arrays) aren't stored in the memory location used by the variable. 
Instead, that memory location points to yet another memory location. 
That's where the [[object]] is ultimately stored.


The use of pointers has a curious effect when you 
assign a variable that references an [[object]] to another variable. 
Instead of copying the object, JavaScript only copies the pointer. 
 > Thus, when we initialize f with e, 
 we're making both e and f 
 point to the same array: [1, 2]. 
    > e and f are {{ aliases }} for the same value.


 > What happens if we mutate a [[primitive value]]?
  all [[primitive values]] are immutable. 
  Two variables can have the same primitive value. 
  However, since primitive values are stored in the 
  memory address allocated for the variable, 
  they can never be {{ aliases }}.

*/



/*
JavaScript stores primitive values in variables, 
but it uses pointers for [non-primitive values] 
like [[arrays]] and other [[objects]]. 
*/

let x = [1, 2]; 
x = [1, 2, 3]; //does not mutate x
x[2] = 4; //mutates x
console.log(x);

