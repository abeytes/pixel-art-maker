'use strict';

var brush;

var drawCanvas = function() {
  var canvas = document.querySelector('#canvas');
  
  var pixel;

  for (var i = 0; i < 20000; i++) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    canvas.appendChild(pixel);
  }

  canvas.addEventListener('mousedown', function(event) {
    if (event.target.className !== 'pixel') {
      return;
    }
    
    event.target.style.background = brush;
    event.target.style.borderColor = brush;
  });
}

var drawPalette = function() {
  var palette = document.querySelector('#palette');

  var hexColors = [
      'red', 'blue','orange','yellow','green','blue','purple',
      'brown','gray','black','white',];

  var color;

  for (var hexColor of hexColors) {
    color = document.createElement('div');
    color.className = 'color';
    color.style.background = hexColor;
    palette.appendChild(color);
  }

  var heading = document.createElement('h2');
  var brushColor = document.createElement('div');
  brushColor.className = 'brushColor';

  palette.appendChild(heading);
  palette.appendChild(brushColor);

  palette.addEventListener('click', function(event) {
    if (event.target.className !== 'color') {
      return;
    }

    brush = event.target.style.background;
    brushColor.style.background = brush;
  });
}

drawCanvas();
drawPalette();