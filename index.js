var index=0;
show();
function show(){
  let slide= document.getElementsByClassName('slide');
    for(i=0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    index=index+1;
    if(index>slide.length){
      index=1;
    }
    slide[index-1].classList.add("active");

    setTimeout(show, 3000);
}