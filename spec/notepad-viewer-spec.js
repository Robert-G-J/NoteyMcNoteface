(function() {
  console.log("Unit Test: There is a viewer instance that wraps a string in HTML");

  var viewer, notepad;

  notepad = new Notepad();
  viewer = new Viewer(notepad);

  assert.isConstructedFrom(viewer, Viewer);
  notepad.createNote("Yolo");
  assert.isEqual(viewer.getHTML(), "<ul><li><div>Yolo</div></li></ul>");

})();

(function() {
  console.log("Unit Test:Wrap whole list in HTML");

  var viewer;

  viewer = new Viewer();

  viewer._notepad.createNote("Yolo");
  viewer._notepad.createNote("Ebola");

  assert.isEqual(viewer.getHTML(), "<ul><li><div>Yolo</div></li><li><div>Ebola</div></li></ul>");

})();
