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
    var test_text2 = "Meeting on Wed";
    var list = new List();
    var note = new Note(test_text);
    var note_2 = new Note(test_text2);
    list.addToList(note);
    list.addToList(note_2);

    if (list.getListNotes() === list.this_array) {
      console.log(true);
    } else {
      throw new Error("You have no notes");
    }
  }
  testReturnArrayObjects();
})(this);
