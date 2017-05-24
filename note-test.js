
(function() {
    console.log("Tests that user can view notes");
    var test_text = "Doctor's apt";
    var note = new Note(test_text);

    assert.isConstructedFrom(note, Note);
    assert.isEqual(test_text, note.getNoteText());
    console.log("Test Passed");

  //   if (note.getNoteText() === test_text) {
  //     console.log(note.text);
  //   } else {
  //     throw new Error("Object does not contain a message");
  //   }
   })();

(function(exports) {
  function testReturnArrayObjects() {
    var test_text = "Doctor's apt";
    //var test_text2 = "Meeting on Wed";
    var list = new List();
    var note = new Note(test_text);
    //var note_2 = new Note(test_text2);
    list.addToList(note);
    //list.addToList(note_2);

    if (list.getListNotes()[0].constructor === note.constructor);  {
      console.log(true);
    } else if {
      throw new Error("You have no notes");
    }
  }
  testReturnArrayObjects();
})(this);
