/* 2 catagories of data types: primitives and objects
PRIMITIVES TYPES:
- String = 'let's learn!'
  > list of characters in a specific sequence 

- Number  = 100
  > represents all kinds of #s 
    > | integers | floating-point | fixed-point |

- Boolean = true or false
  > literal values that represent either true or false

- null
  > represents the INTENTIONAL absence of a value
  > can represent 'emptiness' or 'nothing'
  > difference from undefined: 
      > null must be used explicitly in order to use it (specify as a literal value)
      > undefined can arise implicitly
            (examples):
                >declaring variables without an explicit value:
                  let foo             -> undefined
                  foo                 -> undefined
                  let brooklyn = 99   -> expressions themselves return as undefined

- undefined
  > represents the ABSENCE of VALUE
  > when a variable is "not defined", its value is "undefined"
  > can also be used explicitly as a literal value
  > console.log()
        >function that returns undefined bc it writes a value to the console, it is not returning anything specific

- BigInt
  > represents integer values larger than the range supported by Number data types
  > avoids integer overflow

- Symbol
  > object property KEYS may be either string or symbol type
  > symbols represent a UNIQUE IDENTIFIER 
  > allows the creation of "hidden" properties of an object, that no other part
  of code can accidentally access or overwrite

OBJECT TYPES
- Simple Objects
  > STRUCTURES that contain multiple named values 

- Arrays
  > use integer indexes instead of KEYS

- Dates
  > *more on CC*
- Functions
  > *more on CC*

>> OBJECTS ARE [COMPLEX VALUES] COMPOSED OF [PRIMITIVE VALUES] OR [OTHER OBJECTS]!
    (example):
      >arrays are objects, they have a LENGTH PROPERTY that contain  NUMBER--primitive value

      >> OBJECTS are usually (not always) MUTABLE
    add | remove | change various component values
  
      >> PRIMITIVE VALUES are always IMMUTABLE .... they are ATOMIC/indivisible
*/