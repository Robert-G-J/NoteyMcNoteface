(function(exports) {
  function testNoteLength() {
    var note = new Note();

    if(note.length > 20) {
      throw Error('Character limit exceeds 20');
    }
  }

  testNoteLength();
})(this);
