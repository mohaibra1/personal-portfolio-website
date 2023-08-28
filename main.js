
let pic = document.getElementById('pic');

 function mouseOver(){
    pic.style.width = '400px';
    pic.style.boxShadow = '5px 10px #888888';
}

function mouseOut(){
     pic.style.width = '250px';
     pic.style.boxShadow = '';
}

pic.onmouseover = mouseOver;
pic.onmouseout = mouseOut;


let content = document.getElementById('content');

function contentShadow(){
     content.style.border = '1px solid black';
     content.style.boxShadow = '5px 10px #888888';
     content.style.width = '700px'
     content.style.borderRadius = '10px';
}

function contentShadowOut(){
     content.style.border = '';
     content.style.boxShadow = '';
     content.style.width = ''
     content.style.borderRadius = '';
}

content.onmouseover = contentShadow;
content.onmouseout = contentShadowOut;
