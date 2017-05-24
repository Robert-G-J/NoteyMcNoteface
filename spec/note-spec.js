(function() {
  console.log("Tests that user can view notes");
  var test_text = "Doctor's apt";
  var note = new Note(test_text);

  assert.isConstructedFrom(note, Note);
  assert.isEqual(test_text, note.getText());
  console.log("Test Passed");
})();
