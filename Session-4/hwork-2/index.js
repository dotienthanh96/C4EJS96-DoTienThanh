console.log("Bài 2");
let task = {
    subject: "Implement login feature",
    createdBy: "Hoang Ngoc Duc",
    assignTo: "Nguyen Phuong Nam",
    dueDate: "2019-10-08T18:00:24+0000",
    expectedHours: 0.5,
    };

let { subject , dueDate , assignTo } = task;
console.log(
"Subject: "+ subject +"\n",
"DueDate: "+ dueDate +"\n",
"AssignTo: "+ assignTo);