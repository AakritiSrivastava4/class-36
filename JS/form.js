class Form{
    constructor(){

    }
    display(){
     var title = createElement('h2');
     title.html("car racing game");
     title.position(130,0)

     var button = createButton('play');
     button.position(200, 300)

     var input = createInput('name');
     input.position(200, 100); 

     button.mousePressed(function (){
         input.hide();
         button.hide();
 
         var name = input.value();
         playerCount= playerCount+1;
         player.update(name);
         player.updateCount(playerCount)

         var greeting = createElement("h3");
         greeting.html("hello"+name);
         greeting.position(200,200)

     });
    }
}