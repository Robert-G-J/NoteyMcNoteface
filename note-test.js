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

(function(exports) {
  function testReturnArrayObjects() {
    var test_text = "Doctor's apt";
    var list = new List();
    var note = new Note(test_text);
    list.addToList(note);

    if (list.getListNotes() === list.note) {
      console.log(list.note);
    } else {
      throw new Error("You have no notes");
    }
  }
  testReturnArrayObjects();
})(this);
