function soma1 (a, b){
  return a + b
}

const soma2 = function (a, b){
  return a + b
}

const soma3 = (a, b) => a + b

const soma4 = (a, b) => {
  return a + b
}

let obj = {
  soma5(a, b) {
    return a + b
  }
}

console.log(obj.soma5(5, 6))
