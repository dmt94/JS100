function foo() {
  function bar() {
    goose(); //invoked a function before declaring it
    console.log("BAR");
    function goose() {
      console.log("GOOSE!");
    }
  }

  bar(); // => BAR
  bar(); // => BAR
}

foo();
// bar(); // ReferenceError: bar is not defined