(function(exports) {
  function List() {
    this.array = [];
  }

  List.prototype.addToList = function(text) {
    this.array.push(text);
  };

  List.prototype.getListNotes = function () {
    var notes = "";
    for (var i = 0; i < this.array.length; i++)
    {
      console.log(this.array[i]);
    }

  };

exports.List = List;
})(this);
