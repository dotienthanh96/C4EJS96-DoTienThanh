console.log("Bài 11");
const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
let a = 2*3.14*circle.radius;
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
fd(circle.radius);
pendown();
rt(90);
for (let i = 0; i < a; i++) {
    fd(1);
    rt(360/a);
}

//Chu vi hình tròn C = 2.R.3,14