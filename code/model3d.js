var imgTotal;
var localImg;
var colorD;
var colorB;
var currentIndex;
var interval = null;

function setUpModel(imgTot,path,colorDiv,colorButton,imgSize){
   
    var i1 = document.createElement('i');
    var i2 = document.createElement('i');
    var i3 = document.createElement('i');
    var ul = document.createElement('ul');
    var img = document.createElement('img');
    var liBtn1 = document.createElement('li');
    var liBtn2 = document.createElement('li');
    var liBtn3 = document.createElement('li');
    var divImg = document.createElement('div');
    var divCase = document.createElement('div');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');
    var divMenuBar = document.createElement('div');
    var div = document.getElementsByClassName('model3d-create');
    
    console.log()
    imgSize += 40;

    i1.id = 'icon3d';
    i1.className = "fa fa-play";

    btn1.innerHTML = 'Next';
    btn2.innerHTML = 'Prev';
    
    btn1.style.border = "none";
    btn1.style.outline = "none";
    btn1.style.font = "inherit";
    btn1.style.color = "inherit";
    btn1.style.display = "block";
    btn1.style.cursor = "pointer";
    btn1.style.padding = "8px 8px";
    btn1.style.width = (imgSize/3).toString()+'px';
    btn1.style.backgroundColor = "transparent";

    btn2.style.border = "none";
    btn2.style.outline = "none";
    btn2.style.font = "inherit";
    btn2.style.color = "inherit";
    btn2.style.display = "block";
    btn2.style.cursor = "pointer";
    btn2.style.padding = "8px 8px";
    btn2.style.width = (imgSize/3).toString()+'px';
    btn2.style.backgroundColor = "transparent";

    btn3.style.border = "none";
    btn3.style.outline = "none";
    btn3.style.font = "inherit";
    btn3.style.color = "inherit";
    btn3.style.display = "block";
    btn3.style.cursor = "pointer";
    btn3.style.padding = "8px 8px";
    btn3.style.width = (imgSize/3).toString()+'px';
    btn3.style.backgroundColor = "transparent";

    btn3.appendChild(i1);
    btn1.addEventListener("click",nextImg);
    btn2.addEventListener("click",prevImg);
    btn3.addEventListener("click",_3dImageVisualization);
    
    liBtn1.onmouseover = function(){
        liBtn1.style.backgroundColor = colorButton;
    }

    liBtn1.onmouseout = function (){
        liBtn1.style.backgroundColor = "";
    }


    liBtn2.onmouseover = function(){
        liBtn2.style.backgroundColor = colorButton;
    }

    liBtn2.onmouseout = function (){
        liBtn2.style.backgroundColor = "";
    }

    
    liBtn3.onmouseover = function(){
        liBtn3.style.backgroundColor = colorButton;
    }

    liBtn3.onmouseout = function (){
        liBtn3.style.backgroundColor = "";
    }

    liBtn1.style.padding = 0;
    liBtn1.style.float = "left";
    liBtn1.style.display = "block";
    liBtn1.style.textAlign = "center";
    liBtn1.style.textDecoration = "none";
    
    liBtn2.style.padding = 0;
    liBtn2.style.float = "left";
    liBtn2.style.display = "block";
    liBtn2.style.textAlign = "center";
    liBtn2.style.textDecoration = "none";
    
    liBtn3.style.padding = 0;
    liBtn3.style.float = "left";
    liBtn3.style.display = "block";
    liBtn3.style.textAlign = "center";
    liBtn3.style.textDecoration = "none";
    
    liBtn1.appendChild(btn1);
    liBtn2.appendChild(btn2);
    liBtn3.appendChild(btn3);
    
    ul.style.margin = 0;
    ul.style.padding = 0;
    ul.style.width = "100%";
    ul.style.display = "flex";
    ul.style.listStyle = "none";
    ul.style.overflow = "hidden";
    ul.style.border = "solid 1px "+colorDiv;
    ul.style.justifyContent = "space-around";
    ul.style.borderBottomLeftRadius = "15px";
    ul.style.borderBottomRightRadius = "15px";

    ul.appendChild(liBtn1);
    ul.appendChild(liBtn2);
    ul.appendChild(liBtn3);
    
    divMenuBar.id = 'menuBarDiv';
    divMenuBar.style.maxWidth = imgSize.toString()+'px';
    divMenuBar.style.borderBottomLeftRadius = "15px";
    divMenuBar.style.borderBottomRightRadius = "15px";
    divMenuBar.appendChild(ul);
    
    img.style.cursor = "pointer";
    img.style.userSelect = "none";
    img.style.webkitUserSelect = "none";
    img.style.minWidth = (imgSize-40).toString()+'px';
    img.style.maxWidth = (imgSize-40).toString()+'px';
    img.style.minHeight = (imgSize-40).toString()+'px';
    img.style.maxHeight = (imgSize-40).toString()+'px';

    img.id = '3d-img';
    img.src = path+'/img-1.png';

    divImg.style.padding = "20px";
    divImg.style.textAlign = "center";
    divImg.style.border = "solid 1px "+colorDiv;
    divImg.style.borderTopLeftRadius = "15px";
    divImg.style.borderTopRightRadius = "15px";
    divImg.style.maxWidth = (imgSize-40).toString()+'px';

    divImg.id = 'imgDiv';
    divImg.appendChild(img);
    
    divCase.id = '_3dImageCase';
    divCase.appendChild(divImg);
    divCase.appendChild(divMenuBar);
    
    divCase.style.fontWeight = "bold";
    divCase.style.fontFamily = "'Baloo Tamma 2', cursive";
   
    div[0].appendChild(divCase);
    currentIndex = 1;
    localImg = path;     
    imgTotal = imgTot;
    colorD = colorDiv;
    colorB = colorButton;

}

function nextImg(){
    var img = document.getElementById('3d-img');
    try {
        
        if ( interval != null ){
            clearInterval(interval);
            interval = null;
            var i = document.getElementById('icon3d');
            i.classList.remove('fa','fa-pause');
            i.classList.add('fa','fa-play');
        }

        if (currentIndex < imgTotal-1)
            currentIndex += 1;    
        else
            currentIndex = 1;
    
        img.src = localImg+'/img-'+currentIndex.toString()+'.png';  
    
    } catch (error) {
        console.log(error);
    }
}

function prevImg(){
    var img = document.getElementById('3d-img');
    try {

        if ( interval != null ){
            clearInterval(interval);
            interval = null;
            var i = document.getElementById('icon3d');
            i.classList.remove('fa','fa-pause');
            i.classList.add('fa','fa-play');
        }
        else{

            if (currentIndex > 1)
                currentIndex -= 1;    
            else
                currentIndex = imgTotal-1;
        
            img.src = localImg+'/img-'+currentIndex.toString()+'.png';  
        
        }
        
    } catch (error) {
        console.log(error);
    }
}

function _3dImageVisualization(){

    var img = document.getElementById('3d-img');
    
    try {
        if ( interval == null )
        {
            interval = setInterval(function(){
                if (currentIndex < imgTotal-1)
                    currentIndex += 1;    
                else
                    currentIndex = 1;
        
                img.src = localImg+'/img-'+currentIndex.toString()+'.png';        
            },120);        
            var i = document.getElementById('icon3d');
            i.classList.remove('fa' ,'fa-play');
            i.classList.add('fa','fa-pause');
        }
        else{
            clearInterval(interval);
            interval = null;
            var i = document.getElementById('icon3d');
            i.classList.remove('fa','fa-pause');
            i.classList.add('fa','fa-play');
        }
        
    } catch (error) {
        console.log(error);
    }
  

}