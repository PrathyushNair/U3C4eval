// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/nav.js";
document.querySelector("#navbar").innerHTML=navbar()
import {search,append} from "../components/fetch.js"
document.querySelector("#search_input").addEventListener("keydown",search)
let holddata=JSON.parse(localStorage.getItem("storeddata"))
let toappend=holddata.articles
console.log(holddata)
append(toappend)

 console.log("data",toappend)

