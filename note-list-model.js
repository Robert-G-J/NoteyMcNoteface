(function(exports) {
  function List() {
    this.array = [];
  }

  List.prototype.addToList = function(text) {
    this.array.push(text);
  };

exports.List = List;
})(this);
