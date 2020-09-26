console.log("Bài 12");
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
    {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },

    {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4,
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4,
    },
    {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6,
    },
    {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
];
for (let i = 0; i < cmds.length; i++) {
    if (cmds[i].shape === 'square') {
        home();
        penup();
        rt(90);
        fd(cmds[i].x);
        lt(90);
        fd(cmds[i].y);
        pendown();
        for (let j = 0; j < 4; j++) {
            fd(cmds[i].width);
            rt(90);
        };
    } else if (cmds[i].shape === 'rect') {
        home()
        penup();
        rt(90);
        fd(cmds[i].x);
        lt(90);
        fd(cmds[i].y);
        pendown();
        for (let x = 0; x < 2; x++) {
            fd(cmds[i].height);
            rt(90);
            fd(cmds[i].width);
            rt(90);
        }
    } else {
        let a = 2 * Math.PI * cmds[i].radius;
        home();
        penup();
        rt(90);
        fd(cmds[i].x);
        lt(90);
        fd(cmds[i].y);
        fd(cmds[i].radius);
        pendown();
        rt(90);
        for (let k = 0; k < a; k++) {
            fd(1);
            rt(360 / a);
        }
    }
}