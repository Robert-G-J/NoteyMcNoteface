(function() {
  console.log("Unit Test: There is a viewer instance that wraps a string in HTML");

  var viewer, notepad;
  viewer = new Viewer();
  notepad = new Notepad();

  assert.isConstructedFrom(viewer, Viewer);
  notepad.createNote("Yolo");
  assert.isEqual(viewer.wrapText(notepad.getNote(0).getText()), "<ul><li><div>Yolo</div></li></ul>");

})();
