

// var → old version (function scoped)
// let → introduced in ES6 (block scoped)
// const → introduced in ES6 (block scoped and cannot be reassigned)

// Example using var
{
    var a = 10;   // var is function-scoped, so accessible outside this block
}
console.log(a);   // ✅ Works fine, prints: 10

// Example using let
{
    let b = 20;   // let is block-scoped, not accessible outside this block
}
console.log(b);   // ❌ ReferenceError: b is not defined

// Example using let (correct usage)
{
    let c = 30;
    console.log(c);  // ✅ Works fine, prints: 30 (used inside the same block)
}

// Example using const
{
    const d = 40;   // const is block-scoped and cannot be reassigned
    console.log(d); // ✅ Works fine, prints: 40

    // d = 50;       // ❌ TypeError: Assignment to constant variable.
}
console.log(d);   // ❌ ReferenceError: d is not defined (block scoped)
