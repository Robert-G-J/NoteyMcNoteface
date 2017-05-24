(function(exports) {
  function Viewer() {
  }

  Viewer.prototype.wrapText = function (string) {
    return `<ul><li><div>${string}</div></li></ul>`;
  };

  exports.Viewer = Viewer;
})(this);
