let bar = [1, 2, 3];
let bar2 = 5;
function foo(a: number[], b: number) {
    return a[0] + b;
}
function inferType<T>(arg: T, typeName?: string) {
    return typeName;
}
let f = { test: "" };
// The type name parameter is added/updated automatically when you run the code above.
inferType(bar, "number[]");
inferType(bar2, "number"); 
inferType(foo, "(a: number[], b: number) => number"); 
inferType(f, "{ test: string; }");