console.log('Ready to SEEE things!!!');


function projectData(d3Body, data) {


  d3Body.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', '0px');

  d3Body.selectAll('circle')
        .data(data)
        .transition()
        .duration(700)
        .attr('r', (circle) => circle.radius)
        .attr('cx', (circle) => circle.xLocation)
        .attr('cy', (circle) => circle.yLocation)
        .style('fill', (circle) => circle.color);

  d3Body.selectAll('circle')
        .data(data)
        .exit()
        .remove();

}

function randomColor() {
  const r = Math.floor(Math.random()*0);
  const g = Math.floor(Math.random()*1);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomCircleData() {
  const circle = {
    color: randomColor(),
    radius: `${Math.random() * 100}px`,
    xLocation: `${Math.random() * 100}%`,
    yLocation: `${Math.random() * 100}%`,
  };
  return circle;
}

function randomCircles(numberOfCircles) {
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(randomCircleData());
  }
  return circles;
}


const d3Body = d3.select('#visualization');
projectData(d3Body, randomCircles(5));

setInterval(() => {
  projectData(d3Body, randomCircles(10));
}, 800);

setInterval(() => {
  projectData(d3Body, randomCircles(30));
}, 1000);
