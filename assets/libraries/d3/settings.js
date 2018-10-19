
// // console.log(p);

// var graph01 = d3.select("#d3-01");

// var jsonCircles = [
//     {
//         "x_axis": 30,
//         "y_axis": 30,
//         "radius": 10,
//         "color": "green"
//     }, {
//         "x_axis": 70,
//         "y_axis": 70,
//         "radius": 20,
//         "color": "purple"
//     }, {
//         "x_axis": 110,
//         "y_axis": 100,
//         "radius": 30,
//         "color": "red"
//     }];

// var svgContainer = graph01.append("svg")
//     .attr("width", 200)
//     .attr("height", 200)
//     .style("border", "1px solid black");

// var circles = svgContainer.selectAll("circle")
//     .data(jsonCircles)
//     .enter()
//     .append("circle")
//     .on("mouseover", function (d) {
//         d3.select(this.parentNode)
//         .select("circle")
//         .style("fill", "blue");
//     })
//     .on("mouseout", function (d) {
//         d3.select(this.parentNode)
//         .select("circle")
//         .style("fill", "black");
//     });

// var circleAttributes = circles
//     .attr("cx", function (d) { return d.x_axis; })
//     .attr("cy", function (d) { return d.y_axis; })
//     .attr("r", function (d) { return d.radius; })
//     .style("fill", function (d) { return d.color; });




