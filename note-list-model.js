(function(exports) {
  function List() {
    this.array = [];
  }

  List.prototype.addToList = function(text) {
    this.array.push(text);
  };

  List.prototype.getListNotes = function () {
    for (var i = 0; i <= this.array.length; i++)
    {
      return this.array[i];
    }

  };

exports.List = List;
})(this);
