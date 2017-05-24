(function() {
  console.log("Unit Test: There is a viewer instance that wraps a string in HTML");

  var viewer, notepad;
  
  notepad = new Notepad();
  viewer = new Viewer(notepad);

  assert.isConstructedFrom(viewer, Viewer);
  notepad.createNote("Yolo");
  assert.isEqual(viewer.wrapText(notepad.getNote(0).getText()), "<ul><li><div>Yolo</div></li></ul>");

})();

(function() {
  console.log("Unit Test:Wrap whole list in HTML");

  var viewer, notepad;

  notepad = new Notepad();
  viewer = new Viewer(notepad);

  notepad.createNote("Yolo");
  notepad.createNote("Ebola");
  console.log(viewer._notepad);
  assert.isEqual(viewer.wrapList(), "<ul><li><div>Yolo</div></li><li><div>Ebola</div></li></ul>");

})();
