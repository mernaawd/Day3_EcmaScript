var selectbands=document.getElementById('bands');
var selectartists=document.getElementById('artist');
var bands_div=document.getElementsByClassName('Band')[0];
console.log(bands_div);
var art_div=document.getElementsByClassName('Art')[0];
console.log(art_div);
var xhrBands= new XMLHttpRequest();
var res;

xhrBands.open("GET","rockbands.json");
xhrBands.send();
console.log(xhrBands);
xhrBands.addEventListener("readystatechange",getRequest);

function getRequest(){

        if(xhrBands.readyState === 4 && xhrBands.status === 200){
          console.log(xhrBands.response);
          res=JSON.parse(xhrBands.response);
          console.log(res);
        for (let key in res) {
            opt = document.createElement("option");
            opt.innerText = key;
            opt.value = key;
            selectbands.append(opt);
        }
    }
}
selectbands.addEventListener("change",selectBands);
function selectBands(e){
if(selectartists.children.length>1){
    let empty = Array.from(selectartists.children).splice(1);
    empty.forEach((child) => selectartists.removeChild(child));
}
art_div.style.display = "flex";
var selectBands= e.target.value;
var artistsArr = res[selectBands];
for (let i = 0; i < artistsArr.length; i++) {
    let opt = document.createElement("option");
    opt.innerText = artistsArr[i].name;
    opt.value = artistsArr[i].value;
    selectartists.append(opt);
}
}
selectartists.addEventListener("change", SelectArtist);
function SelectArtist(e) {
  window.open(e.target.value);
}