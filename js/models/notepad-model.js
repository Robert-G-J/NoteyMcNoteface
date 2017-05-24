(function(exports) {
  function Notepad() {
    this._notes = [];
  }

  Notepad.prototype.createNote = function(text) {
    var note = new Note(text);
    this._notes.push(note);
  };

  Notepad.prototype.getNote = function(notesIndex) {
    return this._notes[notesIndex];
  };

  Notepad.prototype.getAllNotes = function() {
    return this._notes;
  };

exports.Notepad = Notepad;
})(this);
