let canvas = document.getElementById("game");

function draw(){
    if(!canvas.getContext("2d")) {alert("Your Bowser don't support Canvas element"); return;}

    let ctx = canvas.getContext("2d");

    drawField(ctx);
}
function drawField(ctx){
    let countWidth = (600) / 30
    let countHeight = (600) / 30

    let lightFirst = true;
    for(let y = 0; y < countHeight; y++){
        for(let i = 0; i < countWidth; i++){
        
            if(i % 2 != lightFirst){
                ctx.fillStyle = "rgb(0, 200, 0)"
            }else{
                ctx.fillStyle = "rgb(0, 150, 0)"
            }
            ctx.fillRect(30 * i, 30 * y, 30 * (i + 1), 30 * (y + 1))
        }
        if(lightFirst)
            lightFirst = false;
        else
            lightFirst = true;
    }
}