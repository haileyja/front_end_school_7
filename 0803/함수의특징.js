
function add(a, b){
    let answer = a + b
}

let result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return
}

let result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return undefined
}

let result = add(10, 20)

////////

function test() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
