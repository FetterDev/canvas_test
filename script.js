var status=0;

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log("x: " + x + " y: " + y)
  return({x,y})
}

document.addEventListener('click', function(event){
    let target = event.target;
    console.log(target)
    if (target.id=="editButton"){
        status=1;
        target.classList.add('hidden')
        document.getElementById('submitEditButton').classList.remove("hidden");
    
    }
    if (target.id=="submitEditButton"){
        status=0;
        target.classList.add('hidden')
        document.getElementById('editButton').classList.remove("hidden");
      
    }
    if (target.id=="mapzone"&& status==1){
      (function(){
            
            
            if (target.getContext) {
              let ctx = target.getContext('2d');
              let position = getCursorPosition(target,event);
              console.log(position)
              ctx.fillStyle = 'rgb(200, 0, 0)';
              ctx.strokeRect(position.x,position.y , 50 , 50);
              ctx.strokeRect(50,50,50,50);
          
            }
          
        
      })();
    }
})