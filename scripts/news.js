// Ude Import export (MANDATORY)
import navbar from "../components/nav.js";
document.querySelector("#navbar").innerHTML=navbar()
import {search,appendnews} from "../components/fetch.js"
document.querySelector("#search_input").addEventListener("keydown",search)
let data=JSON.parse(localStorage.getItem("news"))
console.log(data)

appendnews(data)