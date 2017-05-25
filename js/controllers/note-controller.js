(function(exports){
  function Controller(viewer = new Viewer()) {
    this._view = viewer;
  }

  Controller.prototype.changeText = function() {
    element = document.getElementById("app");
    element.innerHTML = this._view.getHTML();
  };

  exports.Controller = Controller;
})(this);

// the controller is grabbing elements from the HTML file and changing them (when invoked)
