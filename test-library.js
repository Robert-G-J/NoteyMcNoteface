
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
  },

  isEqual: function(a, b) {
    if (a !== b) {
      throw new Error ("Assertion failed: " + a + " is not equal to " + b);
    }
  }

};
