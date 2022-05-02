// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/nav.js";
document.querySelector("#navbar").innerHTML=navbar()

import {searchini,search,append} from "../components/fetch.js"
let d="in"
let data=searchini(d)
data.then((resp)=>{
    console.log(resp)
     append(resp.articles)
})
// console.log(data.articles)

 document.querySelector("#search_input").addEventListener("keydown",search)
 document.querySelector("#in").addEventListener("click",function(){
    searchini("in")
 })
 document.querySelector("#us").addEventListener("click",function(){
    searchini("us")
 })
 document.querySelector("#uk").addEventListener("click",function(){
    searchini("uk")
 })
 document.querySelector("#ch").addEventListener("click",function(){
    searchini("ch")
 })
 document.querySelector("#nz").addEventListener("click",function(){
    searchini("nz")
 })
