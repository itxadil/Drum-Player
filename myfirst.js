var data1=document.getElementsByClassName("aaa")[0].style.color="red"
var data2=document.querySelector("ul li #a1").style.color="red"
var data3=document.querySelector("ul li #a2").style.color="red"
document.querySelector("button").style.backgroundColor="yellow"
document.querySelector("h1").classList.add("huge")
document.querySelector("h2").classList.add("h2huge")
document.querySelector("#liid1 a").setAttribute("href","https://web.facebook.com/?_rdc=1&_rdr")
document.querySelector("#liid2 a").setAttribute("href","https://www.google.com")
document.queryselector("li").setAttribute("cont","container")
document.queryselector(".para").innerHTML="My name is Adil"
document.createElement("ul li").classList.add("cont")
// let newli=document.createElement("li")
// newli.textContent="Adil Ali"
// let menu=document.querySelector("#demo")
// menu.appendChild(newli)

var newli=document.createElement("li")
var newd=document.createTextNode("My name is aaaadil")
newli.appendChild(newd)
var mydemo=document.getElementById("demo")
mydemo.appendChild(newli) 