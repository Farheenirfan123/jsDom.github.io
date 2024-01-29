// let users =[]

// function registered(){
//     users.push({
//         Name : prompt("Enter Name"),
//         Age : prompt("Enter age"),
//         pwd : prompt("Enter password"),
//         id : prompt("enter id")
//     })
//     console.log(users)
// }
// function login(){
//     let id = prompt("Enter id")
//     if(id == users){
//         for(i=0; i<users.lenght; i++){
//             users[i]
//         }
//     }
// }
// let hd = document.getElementsByClassName("heading")

// for(i=0; i<hd.length; i++ ){
//     hd[i].innerText = "1st heading"
// }
// let hd2 = document.querySelectorAll(".heading")

// for(i=0; i<hd.length; i++ ){
//     hd2[i].innerText = "1st heading"
// }
let myHd = document.getElementById("hd").innerText;
console.log(myHd);
//this is get the value


//this method is set to value
let myHd2 = document.getElementById("hd2").innerText = "Farheen";

let myHd3 = document.getElementById("hd2").innerHTML= "<i> Farheen </i>"
 
let myhd4 = document.getElementById("box").innerHTML
document.write(myhd4)


//this is get attribute
 let method = document.getElementById("box").getAttribute("href")
 console.log(method)


 //this is set attribute
 document.getElementById("box").setAttribute("href" , "www.youtube.com")

 let clk = () =>{
    document.getElementById("fd").setAttribute("href" , "www.ggogle.com")
 }

 let chng = () =>{
    document.getElementById("img").setAttribute("src" , "/mickey.jpg")
 }
 
 let imageslinks = {
    ""
 }

let imgArray = document.getElementsByClassName("dp");
for (i=0; i<imgArray.length; i++){
    imgArray[i].setAttribute("src" , imageslinks[i]);
}