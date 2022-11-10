function mooncakeSays(message){
console.log("true");
  let mooncake = '(o.o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }
  console.log("true maather");

  return `${mooncake} ${message}`;
}
console.log("true nuha");

module.exports.mooncakeSays = mooncakeSays;
