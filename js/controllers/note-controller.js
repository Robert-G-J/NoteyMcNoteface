(function(exports){
  function Controller(){

  }

  Controller.prototype.changeText = function() {
    element = document.getElementById("app");
    element.innerHTML = "howdy";
  };

  exports.Controller = Controller;
})(this);
