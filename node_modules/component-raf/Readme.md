
# raf

  request animation frame

## Installation

    $ component install component/raf

## Example

  Request the animation frame with `raf(fn)`, cancel with `raf.cancel(id)`.

```js
var x = 0;
var y = 50;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var raf = require('raf');

function animate() {
  raf(animate);
  draw();
}

var prev = Date.now();
function draw() {
  var curr = Date.now();
  var diff = curr - prev;
  var p = diff / 16;
  ctx.clearRect(0, 0, 900, 300);
  ctx.beginPath();
  ctx.globalAlpha = .5;
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
  x += 2;
  y += Math.sin(x/20) * 5;
  prev = curr;
}

animate();
```

## License

  MIT
