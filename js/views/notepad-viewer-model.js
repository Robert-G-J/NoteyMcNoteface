(function(exports) {
  function Viewer(notepad = new Notepad()) {
    this._notepad = notepad;
  }

  Viewer.prototype.getHTML = function() {
    string = "";
    for (i=0;i<this._notepad.getAllNotes().length; i++){
      string += "<li><div>" + this._notepad.getAllNotes()[i].getText() + "</div></li>"
    };
      return "<ul>" + string + "</ul>";
  };

   exports.Viewer = Viewer;
})(this);
