class Form{

    constructor() {
          
        this.nameInput = createInput();

    }

    display(){
        
        strokeWeight(1);
        stroke("white");
        textSize(30);
        fill("red");
        text("Name : ", dWidth/2 - 400, dHeight/2 - 200);
        this.nameInput.position(dWidth/2 - 300, dHeight/2 - 220);

        text("Goal : ", dWidth/2 - 400, dHeight/2 - 100);
        

        text("Kits : ", dWidth/2 - 400, dHeight/2 + 100);

        player.name = this.nameInput.value();

        playerCount += 1;
        player.index = playerCount;
        
        player.update();
        player.updateCount(playerCount);


    }

    mousePressed(){

        if(mousePressedOver(this.kit1) && mouseDidMove()){

            console.log("a");

        }

    }

}
