let box=document.getElementById("box");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");


async function timer(){
    setTimeout(() => {
        box.innerHTML= "Terminal is hacking";
    }, 4000);
    setTimeout(() => {
        box.innerHTML="Terminal is hacking .";
    }, 7000);
    setTimeout(() => {
        box.innerHTML= "Terminal is hacking ..";
    }, 10000);
    setTimeout(() => {
        box.innerHTML= "Terminal is hacking ...";
    }, 13000);

}
async function termer(){
    let data= await timer();
    setTimeout(() => {
        box1.innerHTML= "Terminal is hacked";
    }, 16000);
    setTimeout(() => {
        box1.innerHTML="Terminal is hacked .";
    }, 18000);
    setTimeout(() => {
        box1.innerHTML= "Terminal is hacked ..";
    }, 20000);
    setTimeout(() => {
        box1.innerHTML= "Terminal is hacked ...";
    }, 24000);
}
async function checker(){
    let term= await termer();
   setTimeout(() => {
    box2.innerHTML= "Getting the passwords and the credentials";
   }, 28000);
}

async function end(){
    setTimeout(() => {
        box3.innerHTML="Successfully copied the credentials";
    }, 37000);
}


async function main(){
    // let data= await timer();
   // let term= await termer();
    let check= await checker();
    let ender= await end();
}
main();
