score=0;
cross=true;
document.onkeydown=function(e){
    console.log("KeyCode is:",e.key)
    if(e.key=="ArrowUp"){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() =>{
          dino.classList.remove('animateDino');
        },700)
    }
    else if(e.key=="ArrowRight"){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    else if(e.key=="ArrowLeft"){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-  112+"px";
    }
}
setInterval(()=>{
  dino=document.querySelector('.dino');
  obstacle=document.querySelector('.obstacle');
  gameover=document.querySelector('.gameover');
  dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
  ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
  oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
  offsetX=Math.abs(dx-ox);
  offsetY=Math.abs(dy-oy);    
  if(offsetX<113 && offsetY<52){
     gameover.style.visibility='visible'    
     bstacle.classList.remove('obstacleAni');
  }
  else  if( offsetX<145 && cross){
    score++;
    updateScore(score);   
    cross=false;  
    setTimeout(()=>{
       cross=true;
    },1000)     
  }
},100)
function updateScore(score){
        scoreCont.innerHTML="Your Score"+score;
}