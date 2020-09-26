console.log("Bài 16");
const oldData = {
    firedRice: {
        price: 30,
        vnName: 'Com rang dua bo',
    },
    noddle: {
        price: 20,
        vnName: 'My tom chanh',
    },
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin',
    },
};
let {firedRice, pho} = oldData;
let newData = {};
newData = {firedRice, pho};
console.log(newData);