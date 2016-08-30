import Ember from 'ember';

export default Ember.Controller.extend({

  // Properties
  stringBuffer: "",

  answerDisplay: "0",

  // Calculate the answer, called by '=' button
  calculateAnswer : function(){

       return eval(this.get("stringBuffer"));
  },

  actions: {

    pressButton: function(value){
        if(value === 'C'){
          this.set("stringBuffer", "");
          this.set("answerDisplay");

        } else if(value === "=") {
          this.set("answerDisplay", this.calculateAnswer());
          this.set("stringBuffer", this.get('stringBuffer') + " " + value);


        }else{
          // Check if Operator
          if(typeof value === 'string' && value !== "."){
            this.set("stringBuffer", this.get('stringBuffer') + " " + value + " ");

          }else{
            this.set("stringBuffer", this.get('stringBuffer') + value);

          }
        }

    }

  }
});
