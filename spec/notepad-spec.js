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

    var notepad, note, test_text;

    test_text = "Doctor's apt";
    notepad = new Notepad();
    note = new Note(test_text);
    notepad.addNote(note);

    console.log(notepad.getNote(0));
    assert.isEqual(notepad.getNote(0).getText(), test_text);
    console.log("Test Passed");
})();

(function() {
    console.log("Unit test: Store several notes");

    var notepad, note, test_text;

    test_text_1 = "Doctor's apt";
    test_text_2 = "Surgeon's apt";
    notepad = new Notepad();
    note_1 = new Note(test_text_1);
    note_2 = new Note(test_text_2);

    notepad.addNote(note_1);
    notepad.addNote(note_2);
    notepad.getAllNotes();
    assert.isEqual(notepad.getAllNotes().length, 2);
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
