(function(exports) {
  function Note(note_message) {
    this.note_message = note_message;
  }

  Note.prototype.getNoteMessage = function() {
    return this.note_message;
  };

  exports.Note = Note;
})(this);
