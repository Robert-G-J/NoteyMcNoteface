(function(exports) {
  function returnNoteMessage() {
    var test_string = "Doctor's apt";
    var note = new Note(test_string);

    if (note.getNoteMessage() === test_string) {
      console.log(note.note_message);
    } else {
      throw new Error("Object does not contain a message");
      }
    }

  returnNoteMessage();
})(this);
