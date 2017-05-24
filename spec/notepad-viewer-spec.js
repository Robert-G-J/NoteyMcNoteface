(function() {
  console.log("Unit Test: There is a viewer instance that wraps a string in HTML"); 

  var viewer, notepad;
  viewer = new Viewer();
  notepad = new Notepad();

  assert.isConstructedFrom(viewer, Viewer);
  notepad.createNote("Lunch with Mummy");
  assert.isEqual(viewer.wrapText(note), "<ul><li><div>Lunch with Mummy</div></li></ul>");

})();
