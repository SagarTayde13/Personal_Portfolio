
function area() {
    let r = parseInt(prompt("Enter radius: "))
    const pi = 3.14
    let area = pi * r * r;
    console.log(area);
}
function volume() {
    let r = parseInt(prompt("Enter radius: "))
    const pi = 3.14;
    let volume = pi * r * r * r;
    console.log(Math.round(volume));
}
function circum() {
    let r = parseInt(prompt("Enter radius: "))
    const pi = 3.14;
    let circumference = 2 * pi * r;
    console.log(Math.round(circumference));
}