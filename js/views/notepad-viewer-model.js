(function(exports) {
    function Viewer(notepad) {
      this._notepad = notepad;
    }

    Viewer.prototype.wrapText = function(string) {
      return `<ul><li><div>${string}</div></li></ul>`;
    };

    Viewer.prototype.wrapList = function() {
      this._notepad.getAllNotes().map(function(note) {
          note.getText();
        });
      }

  }; exports.Viewer = Viewer;
})(this);
