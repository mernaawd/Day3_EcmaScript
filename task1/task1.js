var btn= document.getElementById("more");
var div= document.getElementById("details")
var xhrgetPosts= new XMLHttpRequest();

function getposts(){
 
    xhrgetPosts.open("GET","https://jsonplaceholder.typicode.com/posts");
    xhrgetPosts.send();
    console.log(xhrgetPosts);
}

btn.addEventListener("click",getposts)
xhrgetPosts.addEventListener("readystatechange",function(){
    if(xhrgetPosts.readyState===4){
        if(xhrgetPosts.status===200){
            console.log(xhrgetPosts.response);
            var request = JSON.parse(xhrgetPosts.response);
        console.log(request);
        request.forEach(function (el) {
            // console.log(el);
            div.innerHTML += "<p> Title:" + el.title + "<br> </p> <p> The body:" + el.body + "</p> <br>";
          });
        
        }
    }
})





