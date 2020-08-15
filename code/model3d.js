var interval = null;
var currentIndex ;
var imgTotal;

function setUpModel(imgTot){
   
    var div = document.getElementsByClassName('model3d-create');
    var divCase = document.createElement('div');
    var divImg = document.createElement('div');
    var img = document.createElement('img');
    var divMenuBar = document.createElement('div');
    var ul = document.createElement('ul');
    var liBtn1 = document.createElement('li');
    var liBtn2 = document.createElement('li');
    var liBtn3 = document.createElement('li');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');
    
    btn1.innerHTML = 'Next';
    btn2.innerHTML = 'Prev';
    btn3.innerHTML = '3d';
    btn1.addEventListener("click",nextImg);
    btn2.addEventListener("click",prevImg);
    btn3.addEventListener("click",_3dImageVisualization);
    liBtn1.appendChild(btn1);
    liBtn2.appendChild(btn2);
    liBtn3.appendChild(btn3);
    
    ul.appendChild(liBtn1);
    ul.appendChild(liBtn2);
    ul.appendChild(liBtn3);
    
    divMenuBar.id = 'menuBarDiv';
    divMenuBar.appendChild(ul);
    
    img.id = '3d-img';
    img.src = '../assets/img-1.png';
    divImg.id = 'imgDiv';
    divImg.appendChild(img);
    
    divCase.id = '_3dImageCase';
    divCase.appendChild(divImg);
    divCase.appendChild(divMenuBar);
    div[0].appendChild(divCase);
    currentIndex = 1;
    imgTotal = imgTot;
    
}

function nextImg(){
    var img = document.getElementById('3d-img');
    try {
        console.log(currentIndex);
        
        if (currentIndex < imgTotal-1)
            currentIndex += 1;    
        else
            currentIndex = 1;
    
        img.src = '../assets/img-'+currentIndex.toString()+'.png';  
    
    } catch (error) {
        console.log(error);
    }
}

function prevImg(){
    var img = document.getElementById('3d-img');
    try {
        console.log(currentIndex);
        
        if (currentIndex > 1)
            currentIndex -= 1;    
        else
            currentIndex = imgTotal-1;
    
        img.src = '../assets/img-'+currentIndex.toString()+'.png';  
    
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
        
                img.src = '../assets/img-'+currentIndex.toString()+'.png';        
            },120);        
        }
        else{
            clearInterval(interval);
            interval = null;
        }
        
    } catch (error) {
        console.log(error);
    }
  

}