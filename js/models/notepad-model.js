(function(exports) {
  function Notepad() {
    this._notes = [];
  }

  Notepad.prototype.addNote = function(note) {
    return this._notes.push(note);
  };

  Notepad.prototype.createNote = function(text) {
    var note = new Note(text);
    return this._notes.push(note);
  };

  Notepad.prototype.getNote = function(notesIndex) {
    return this._notes[notesIndex];
  };

  Notepad.prototype.getAllNotes = function() {
    return this._notes;
  };

exports.Notepad = Notepad;
})(this);
