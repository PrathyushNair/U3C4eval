let searchini=async(code)=>
{   
        console.log("hello")
        const resp=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`)
        const data=await resp.json()
        //console.log(data)
        return data
       
        
    
    
}

let search=async(e)=>
{   if(e.key=="Enter")
    {  console.log("hello")
       
       let query=document.querySelector("#search_input").value
       console.log(query)
        const resp=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        const data=await resp.json()
        localStorage.setItem("storeddata",JSON.stringify(data))
        window.location.href="search.html"
        //return data
    }
    
}
let tonews=(data)=>{
    let dat=data
    localStorage.setItem("news",JSON.stringify(dat))
    window.location.href="news.html"
}
let append=(toappend)=>
{   document.querySelector("#results").innerText=null
    toappend.map(({title,description,content,urlToImage})=>{
       let div=document.createElement("div")
       div.setAttribute("class","news")
       
       let tle=document.createElement("h3")
       let image=document.createElement("img")
       image.src=urlToImage
       image.style.height="100px"
       image.style.width="100px"
       let p1=document.createElement("p")
       let p2=document.createElement("p")
       tle.innerText=title
       p1.innerText=content
       p2.innerText=description
        div.append(image,tle,p1,p2)
        div.addEventListener("click",function(){
            tonews({title,description,content,urlToImage})
        })
        document.querySelector("#results").append(div)
    })
}
let appendnews=(data)=>
{   document.querySelector("#detailed_news").innerText=null 
    let tle=document.createElement("h3")
    let image=document.createElement("img")
    image.src=data.urlToImage
    image.style.height="40%"
    image.style.width="100%"
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    tle.innerText=data.title
    p1.innerText=data.content
    p2.innerText=data.description
    document.querySelector("#detailed_news").append(image,tle,p2,p1)
}

export {searchini,search,append,appendnews}