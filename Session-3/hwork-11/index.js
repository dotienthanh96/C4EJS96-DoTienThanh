console.log("Bài 11")

let a = prompt("Enter a sequence number");
let b = a.split(",");
let c = 0 ; 
let d ;
d = b.filter(function(item) {
    return(item%2!=0);
})
alert(b+"=>"+d)
  
