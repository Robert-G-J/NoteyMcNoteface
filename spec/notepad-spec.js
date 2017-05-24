(function() {
    console.log("Unit test: Make a notepad");

    var notepad, note, test_text;

    test_text = "Doctor's apt";
    notepad = new Notepad();
    assert.isConstructedFrom(notepad, Notepad);
    console.log("Test Passed");
})();

(function() {
    console.log("Unit test: Store a note");

    var notepad, test_text;

    test_text = "Doctor's apt";
    notepad = new Notepad();
    notepad.createNote(test_text);

    console.log(notepad.getNote(0));
    assert.isEqual(notepad.getNote(0).getText(), test_text);
    console.log("Test Passed");
})();

(function() {
    console.log("Unit test: Store several notes");

    var notepad, test_text_1, test_text_2;

    test_text_1 = "Doctor's apt";
    test_text_2 = "Surgeon's apt";
    notepad = new Notepad();

    notepad.createNote(test_text_1);
    notepad.createNote(test_text_2);

    assert.isEqual(notepad.getAllNotes().length, 2);
    console.log("Test Passed");
})();

(function() {
  console.log("Unit test: Create a note in the notepad");

  var notepad;

  notepad = new Notepad();

  notepad.createNote("Meet my mistress, Audrey");

  assert.isEqual(notepad.getAllNotes().length, 1);
  assert.isEqual(notepad.getNote(0).getText(), "Meet my mistress, Audrey")
  console.log("Test Passed");
})();





// list.addToList(note);
//
//
//   if (list.getListNotes()[0].constructor === note.constructor);  {
//     console.log(true);
//   } else if {
//     throw new Error("You have no notes");
//   }
// }
