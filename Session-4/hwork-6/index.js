console.log("Bài 6");
// 6.1 

let learn = [
    {
        name: "HTML",
        Complete : false
    },
    {
        name: "CSS",
        Complete : false
    },
    {
        name: "Basics of javascript",
        Complete : false
    },
    {
        name: "Node Package Manager (npm)",
        Complete : false
    },
    {
        name: "Git",
        Complete : false
    }
]; 
// 6.6
for ( let i = 0 ; i < learn.length ; i++ ) {
    console.log(`1. [ ] ${learn[i].name}`)
}


console.log("Hi there , this is your learning takes to front-end developer carrer: "); 
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};

// //6.2
let b = prompt("Enter your command (New , update , complete")
if (b=="new") {let c = prompt("Enter new task:")
learn.push({
    name: c,
    Complete: false
}) ; console.log(learn)
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};}

// // 6.3 
let b = prompt("Enter your command (New , update , complete")
if (b=="update") {let c =Number(prompt("Enter position:"))
let d = prompt("Enter new title")
learn[c-1].name = d
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.4

let b = prompt("Enter your command (New , update , complete")
if (b=="complete") {let c =prompt("Enter position:")
learn[c-1].Complete = true
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.5

let d = prompt("Bạn muốn xóa gì? ( HTML, CSS , ...)")
// xóa html : learn.splice(0,1).......

//6.6 





