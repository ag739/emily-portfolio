function strToInt(s) { 
  return Number(s.substr(0, s.length - 2));
}

var svg = d3.select('svg'),
  interval = 3000,
  i = 0,
  data = [];

while (i < strToInt(svg.style('width'))) {
  data.push(Math.random() * 10);
  i += 10;
}

var draw = function(data) {
  var lines = svg.selectAll('line').data(data);
  // enter line
  lines.enter().append('line')
    .attr('y1', 0)
    .attr('y2', strToInt(svg.style('height')))
    .attr('x1', function(d, i) { return i * 10; })
    .attr('x2', function(d, i) { return i * 10; })
    .attr('stroke', '#333')
    .attr('stroke-width', 0);

  lines.transition().duration(interval)
    .attr('stroke-width', function(d) { return d; })
}

draw(data);

setInterval(function () {
  data = data.map(function(d){return Math.random() * 10});
  draw(data);
}, interval);
