let settings = new Settings();

settings.difficultyBind("#gameDifficulty");

settings.on("changeDifficulty", () =>{
    console.log("HelloWorld")
})