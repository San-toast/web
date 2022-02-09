function closure() {
  let parent = "Susan";
  function childOfClosure() {
    console.log(parent);
  }
  childOfClosure();
}
closure();
