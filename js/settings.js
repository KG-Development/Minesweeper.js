"use strict";

function Settings(){
    
    this.difficultyBind = function(selectSelection){
        let select = document.querySelector(selectSelection);
        select.onchange = () =>{
            switch(document.querySelector(selectSelection).selectedIndex){
                case 0:
                    this.setDifficulty("easy");
                    break;
                case 1:
                    this.setDifficulty("medium");
                    break;
                case 2:
                    this.setDifficulty("hard");
                    break;
            }  
        }
    }
    this.getSize = function() {
        switch(this.difficulty){
            case "easy":
                return {x: 8, y: 8};
            case "medium":
                return {x: 16, y: 16};
            case "hard":
                return {x: 30, y: 16};
            default: return {};
        }
    }
    this.setDifficulty = function(difficulty) {
        this.difficulty = difficulty;
        this.Size = this.getSize();
    }
    this.difficulty = "easy";
    this.Size = this.getSize();
}