canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    
    color=document.getElementById("color").value ;  
    width=document.getElementById("width_line").value ;
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   
    mouseEvent="mouseUp";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   
    mouseEvent="mouseLeave";
    
}
var last_position_x,last_position_y;

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   console.log(e);
    current_position_mousex=e.clientX-canvas.offsetLeft;

    current_position_mousey=e.clientY-canvas.offsetTop;
    

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_mousex,current_position_mousey);
ctx.stroke();

}
last_position_x=current_position_mousex;
last_position_y=current_position_mousey;
    
}
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-200;
if(width<992){
    document.getElementById("myCanvas").style.height=new_height;
    document.getElementById("myCanvas").style.width=new_width;
    document.getElementById("myCanvas").style.overflow="hidden";

}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    
    color=document.getElementById("color").value ;  
    width=document.getElementById("width_line").value ;
    
    last_position_touchx=e.touches[0].clientX-canvas.offsetLeft;

    last_position_touchy=e.touches[0].clientY-canvas.offsetTop;

}
var last_position_touchx,last_position_touchy;
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    
    
    
    current_position_touchx=e.touches[0].clientX-canvas.offsetLeft;

    current_position_touchy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_touchx,last_position_touchy);
    ctx.lineTo(current_position_touchx,current_position_touchy);
    ctx.stroke();
    
    
    last_position_touchx=current_position_touchx;
    last_position_touchy=current_position_touchy;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

