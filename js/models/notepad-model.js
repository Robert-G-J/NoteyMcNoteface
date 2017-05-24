(function(exports) {
  function Notepad() {
    this._notes = [];
  }

  Notepad.prototype.addNote = function(note) {
    return this._notes.push(note);
  };

  Notepad.prototype.getNote = function(notesIndex) {
    return this._notes[0];
  }

  Notepad.prototype.getListNotes = function () {
    for (var i = 0; i <= this.array.length; i++)
    {
      return this.array[i];
    }

  };

exports.Notepad = Notepad;
})(this);
