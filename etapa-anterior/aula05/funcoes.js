
let a

function cabeca(){
  a = 8

  return function pe(){
    a = 6
  }
}

cabeca
console.log(a)

let b = cabeca
console.log(b)

let c = b()
console.log(c)

c()
console.log(a)

cabeca()
console.log(a)

cabeca()()
console.log(a)
