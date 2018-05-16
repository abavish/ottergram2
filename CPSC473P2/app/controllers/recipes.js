import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

  actions: {
    toggleBody() {
      if (event.target.classList.contains('not-selected')) {
        event.target.classList.remove("not-selected");
        event.target.classList.add("selected");
      } else if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
        event.target.classList.add("not-selected");
      }
    },

    resetButtons(){

        var btnSelect = document.querySelectorAll(".selected");

        for(var i = 0; i < btnSelect.length; i++)
        {
          if(btnSelect[i].classList.contains("selected"))
          {
            btnSelect[i].classList.remove("selected");
            btnSelect[i].classList.add("not-selected");
          }
        }

        localStorage.setItem('myIngredients', '');
    },


    submit() {

      var btnSelect = document.querySelectorAll(".selected");
      var custom = document.querySelector(".customIngredients");
      var ingredients = "";
      for(var i = 0; i < btnSelect.length; i++)
      {
        if(btnSelect[i].classList.contains("selected"))
        {
          ingredients += btnSelect[i].innerHTML;
          if( i != btnSelect.length-1)
          {
            ingredients += ", ";
          }
        }
      }

      if($.trim($(".customIngredients").val()))
      {
        ingredients += ",";
        ingredients += custom.value;
      }
      console.log(ingredients);

      //save to local storage!
      localStorage.setItem('myIngredients', ingredients);
      this.transitionToRoute('results');

      // let idd = localStorage.getItem("myIngredients");
      // console.log(idd);
    }
}

/*actions: {
    resetButtons(){
        if(event.target.classList.contains("selected"))
        {
          event.target.classList.remove("selected");
          event.target.classList.add("not-selected");
        }

    }
  }

    submitButtons(){

    }*/

});
