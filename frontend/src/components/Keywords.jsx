import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

const Keywords = ({ keywords }) => {
  const wordsArray = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "strawberry",
    "blueberry",
    "watermelon",
    "pineapple",
    "peach",
    "lemon",
    "lime",
    "pear",
    "plum",
    "cherry",
    "mango",
    "coconut",
    "pomegranate",
    "apricot",
    "fig",
    "raspberry",
    "blackberry",
    "cranberry",
    "avocado",
    "guava",
    "passionfruit",
    "dragonfruit",
    "lychee",
    "melon",
    "nectarine",
    "persimmon",
    "tangerine",
    "papaya",
    "grapefruit",
    "cantaloupe",
    "honeydew",
    "date",
    "kiwifruit",
    "blueberry",
    "boysenberry",
    "mulberry",
    "clementine",
    "soursop",
    "starfruit",
    "quince",
    "breadfruit",
    "durian",
    "jackfruit",
    "kumquat",
    "pawpaw",
    "rhubarb",
    "soursop",
    "ugli fruit",
    "salmonberry",
    "gooseberry",
    "elderberry",
    "plantain",
    "tamarind",
    "saskatoon berry",
    "acai berry",
    "persimmon",
    "plantain",
    "ackee",
    "feijoa",
    "physalis",
    "rambutan",
    "longan",
    "salak",
    "sapodilla",
    "chayote",
  ];

  const words = wordsArray.map((keyword) => ({ text: keyword, size: 20 })); // Adjust font size as needed
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 800;
    const height = 400;
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    const wordCloud = cloud()
      .size([width, height])
      .words(words)
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize((d) => d.size)
      .on("end", draw);

    wordCloud.start();

    function draw(words) {
      svg.selectAll("*").remove();

      svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => d.size + "px")
        .style("fill", (d, i) => colorScale(i))
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d) => d.text);
    }
  }, [words]);

  return (
    <div className="kw-outer-div">
      <h3> Keywords Extraction</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Keywords;
