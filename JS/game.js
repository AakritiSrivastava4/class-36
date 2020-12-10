class Game {
    constructor(){

    }

    getState(){
      var gamestateRef = database.ref("gameState");
      gamestateRef.on("value",function (data){
          gameState = data.val ();
      })

      
    }
    update (state){
        database.ref('/').update({
            gameState:state
        })

    }

    start (){
        player = new Player();
        player.getCount();
        form = new Form ();
        form.display();

    }
}