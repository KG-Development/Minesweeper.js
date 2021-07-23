let settings = new Settings();

settings.difficultyBind("#gameDifficulty")

function initGame(){
    canvas.width = 30 * settings.Size.x;
    canvas.height = 30 * settings.Size.y;
    draw();
}

