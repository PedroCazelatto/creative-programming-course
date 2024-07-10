const canvasSketch = require('canvas-sketch');
const { math } = require('canvas-sketch-util')

const settings = {
  dimensions: [ 1080, 1080 ]
};

function updateContext (context) {

}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black'

    const hours = 12
    const cx = width / 2
    const cy = height / 2

    const w = width * 0.01
    const h = height * 0.05

    const baseAngle = math.degToRad(360 / hours)
    const radius = width * 0.3

    let x, y
    context.beginPath()
    context.arc(cx, cy, radius + h / 2, 0, Math.PI * 2)
    context.lineWidth = 5
    context.stroke()

    for (let i = 0; i < hours; i++) {
      context.save()

      x = cx + radius * Math.sin(i * baseAngle)
      y = cy + radius * Math.cos(i * baseAngle)

      context.translate(x, y)


      context.rotate(-baseAngle * i)
      context.beginPath()
      context.rect(-w / 2, -h / 2, w, h)
      context.fill()

      context.restore()
    }

    context.beginPath()
    context.rect(cx, cy, radius - h, 4)
    context.fill()
  };
};

canvasSketch(sketch, settings);
