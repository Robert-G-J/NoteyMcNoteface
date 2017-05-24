(function(exports) {
  function Notepad() {
    this._notes = [];
  }

  Notepad.prototype.addNote = function(note) {
    return this._notes.push(note);
  };

  Notepad.prototype.getNote = function(notesIndex) {
    return this._notes[notesIndex];
  };

  Notepad.prototype.getAllNotes = function () {
    for (var i = 0; i <= this._notes.length; i++)
    {
      return this._notes[i];
    }

  };

exports.Notepad = Notepad;
})(this);
