(function(exports) {
  function returnNoteText() {
    var test_text = "Doctor's apt";
    var note = new Note(test_text);

    if (note.getNoteText() === test_text) {
      console.log(note.text);
    } else {
      throw new Error("Object does not contain a message");
      }
    }

  returnNoteText();
})(this);
