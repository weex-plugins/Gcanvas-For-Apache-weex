
# tween

  Motion tween component using [ease](https://github.com/component/ease).

## Installation

    $ component install component/tween

## Example

```js
var Tween = require('tween');
var raf = require('raf');
var button = document.querySelector('button');

var tween = Tween({ rotate: 0, opacity: 0 })
  .ease('out-bounce')
  .to({ rotate: 360, opacity: 1  })
  .duration(800);

tween.update(function(o){
  button.style.opacity = o.opacity;
  button.style.webkitTransform = 'rotate(' + (o.rotate | 0) + 'deg)';
});

tween.on('end', function(){
  animate = function(){};
});

function animate() {
  raf(animate);
  tween.update();
}

animate();
```

## API

### Tween(obj:Object|Array)

  Initialize a new `Tween` with `obj`.

### Tween#reset()

  Reset the tween.

### Tween#to(obj:Object|Array)

  Tween to `obj` and reset internal state.

     tween.to({ x: 50, y: 100 })

### Tween#duration(ms:Number)

  Set duration to `ms` [500].

### Tween#ease(fn:String|Function)

  Set easing function to `fn`.

     tween.ease('in-out-sine')

### Tween#update(fn:Function)

  Set update function to `fn` or
  when no argument is given this performs
  a "step".

### Tween#stop()

  Immediately stop the tween and emit "stop" and end" events. `tween.stopped`
  is then marked as `true`.

## License

  MIT
