console.log("Bài 4");
//4.1 , 4.2

let keywork = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for ‘error’ ",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  ui_ux:
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
while (true) {
  alert("Hi there, this is dev dictionary");
  let a = prompt("Enter a keyword");
  if (a == null) {
    alert("Good bye!");
    break;
  } else if (a == "debug") {
    alert(
      "debug: The process of figuring out why your program has a certain error and how to fix it"
    );
  } else if (a == "done") {
    alert(
      "done: When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)"
    );
  } else if (a == "pm") {
    alert(
      "pm: The short version of Project Manager, the person in charge of the final result of a project"
    );
  } else if (a == "ui_ux") {
    alert(
      "ui_ux: UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
    );
  } else {
    let b = prompt(
      `We could not in find your word: ${a}, leave your explanation`
    );
    alert("Done");
    keywork.a = b;
  }
}
