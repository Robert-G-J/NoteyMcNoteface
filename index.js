function init() {
  controller = new Controller();
  controller._view._notepad.createNote("Rhubarb and Custard");
  controller._view._notepad.createNote("Sophie ROCKS");
  controller.changeText();
}

window.onload = init;
