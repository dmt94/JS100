//structured to use a DEFAULT value 
function say(words = "Hello") {
  console.log(words + "!");
}

say("Howdy"); // => Howdy! with an argument
say(); // => Hello! without an argument, uses default