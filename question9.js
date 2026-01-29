let a = 10;
function test() {
  console.log(a);
  let a = 20;
}
test();
//output : throw error because js will check if a exists in current scope if yes  it works according to it otherwise  check for global variable  in this case there is a in functional scope so it will not accept global. if there is no a declaration and initialization in current scope then it will check the global variable.


Why global a is NOT used

Because scope resolution works like this:

JS first checks current scope

If a variable name exists there → it never looks outside

Even if the variable is not initialized yet