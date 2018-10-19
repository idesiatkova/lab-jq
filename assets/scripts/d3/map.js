

function initMap() {
    var map = d3.select("#d3-map");

    var tooltipDiv = map.append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var mapContainer = map.append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .style("position", "relative")
        .attr("viewBox", "0 0 1224.449 760.6203")
        .call(d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoom));

    var g = mapContainer.append("g");

    var regions = g.selectAll("path")
        .data(jsonRegions)
        .enter()
        .append("path")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    regionsAttributes = regions
        .attr("d", function (d) { return d.path; })
        .attr("name", function (d) { return d.name; })
        .attr("id", function (d) { return d.id; })
        .style("transition", "fill 0.6s ease")
        .style("fill", "white");

    function handleMouseOver(d, i) {  // Add interactivity
        d3.select(this).style("fill", "orange");

        var thisDementions = d3.select(this).node().getBoundingClientRect();
        var parentDementions = d3.select(this.parentNode).node().getBoundingClientRect();

        // console.log("height: " + dementions.height);
        // console.log("topsvg: " + parentDementions.top);
        // console.log("top: " + thisDementions.top);

        tooltipDiv.transition()
            .duration(200)
            .style("opacity", .9);

        tooltipDiv.html(d.name + "<br/>" + d.id)
            // .style("left", (d3.event.pageX - 230) + "px")		
            // .style("top", (d3.event.pageY - 300) + "px");	
            .style("transform", "translateY(-50%) translateX(-50%)")
            .style("left", (thisDementions.left - parentDementions.left + (thisDementions.width / 2)) + "px")
            .style("top", (thisDementions.top - parentDementions.top + (thisDementions.height / 2)) + "px");
    }

    function handleMouseOut(d, i) {
        d3.select(this).style("fill", "white");
        tooltipDiv.transition()
            .duration(500)
            .style("opacity", 0);
    }

    var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

    function zoom() {
        g.attr("transform", d3.event.transform);
    }

};
initMap();



