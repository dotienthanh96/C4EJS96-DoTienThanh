console.log("Part1");
// //1.l
// let a = Math.random() * (1 - 0) ; console.log(a)

// //1.2
// let b = [2,5,6,9,10] ;
// let random = b[Math.floor(Math.random() * b.length)];
// console.log(random);
//1.3
let quest = [
    {
        question:"Một tuần có bao nhiêu ngày?",
        choice : "1. 1 ngày\n2. 3 ngày\n3. 5 ngày\n4. 7 ngày",
        rightchoice: 4,
    },
    {
        question: "Mặt trời mọc hướng nào?",
        choice : " 1. tây\n 2. nam\n 3. đông\n 4. bắc",
        rightchoice: 3,
      
    },
    {
        question:"Việt Nam có mấy múi giờ?",
        choice : "1. 1 múi giờ \n 2. 2 múi giờ \n 3. 3 múi giờ \n 4. 4 múi giờ",
        rightchoice: 1,
       
    },
    {
        question:"Việt Nam có bao nhiêu dân tộc?",
        choice:"1. 30 dân tộc \n 2. 54 dân tộc \n 3. 42 dân tộc \n 4. 66 dân tộc",
        rightchoice: 2,
    }
];

// // 1.4 
// let rand = Math.floor(Math.random()*quest.length);
// let ask = Number(prompt(`${quest[rand].question}\n${quest[rand].choice}`));
// // 1.5
// if (quest[rand].rightChoice == ask) {
//     alert('Bravo!!!');
// } else {
//     alert('Good luck next time');
// }
// // 1.6

// while (true) {
//     if (quest.length == 0) {
//         alert('We are out of question :(');
//         break;
//     };
//     let rand = Math.floor(Math.random()*quest.length);
//     let ask = Number(prompt(`${quest[rand].question}\n${quest[rand].choice}`));
//     if (ask == null || ask == undefined || ask != quest[rand].rightchoice) {
//         alert('Your anser wrong. Bye!');
//         break;
//     };
   
//     quest.splice(rand, 1);
// };

// 1.7
// let count = 0 ;
// let sum = quest.length;
// while (true) {
//     if (quest.length == 0) {
//         alert('We are out of question :(');
//         break;
//     };
//     let rand = Math.floor(Math.random()*quest.length);
//     let ask = Number(prompt(`${quest[rand].question}\n${quest[rand].choice}`));
//     if ( ask == quest[rand].rightchoice) {
//         count++; }
//     quest.splice(rand, 1);
// };
// alert(`You answered correctly ${count} out of ${sum} questions`);

// 1.8

let sum = quest.length;
let count = 0;
while (true) {
    if (quest.length == 0) {
        break;
    };
    let ranq = Math.floor(Math.random() * quest.length);
    let arrchoice = quest[rand].choice;
    for (let i = arrchoice.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrchoice[i], arrchoice[j]] = [arrchoice[j], arrchoice[i]]
    };
    let ask = Number(prompt(`${quest[rand].question}\n${arrchoice.join('\n')}`));
    if (quest[rand].rightChoice == ask) {
        count++;
    };
    quizzes.splice(rand, 1);
};
alert('We are out of question :(');
alert(`You answered correctly ${count} out of ${sum} questions`);
