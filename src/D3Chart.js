import * as d3 from "d3";
const data = [20, 30, 45, 21, 67, 90];
const url = "https://udemy-react-d3.firebaseio.com/ages.json";
export default class D3Chart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    //Data charts with fetch
    d3.json(url).then(age => {
      const rect = svg.selectAll("rect").data(age);
      rect
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", 20)
        .attr("width", 50)
        .attr("height", d => d.age * 10)
        .attr("fill", d => {
          if (d.age > 10) {
            return "red";
          }
          return "green";
        });
    });

    //Data Collection chart

    // data.forEach((d, i) => {
    //   svg
    //     .append("rect")
    //     .attr("x", i * 100)
    //     .attr("y", 20)
    //     .attr("width", 50)
    //     .attr("height", d)
    //     .attr("fill", "grey");
    // });

    //Data Joins
    // const rect = svg.selectAll("rect").data(data);
    // rect
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 100)
    //   .attr("y", 20)
    //   .attr("width", 50)
    //   .attr("height", d => d)
    //   .attr("fill", "grey");
  }
}
