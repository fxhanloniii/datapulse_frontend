import React, { useEffect } from 'react'
import * as d3 from 'd3';

const Sales = () => {
    const data = [35, 20, 30, 40, 55, 60];
    const width = 600;
    const height = 400;
    const padding = 40;
  
    useEffect(() => {

      d3.select('#chart').selectAll('svg').remove();

      const xScale = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([padding, width - padding])
        .padding(0.1);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height - padding, padding]);
  
      const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
  
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', d => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - padding - yScale(d))
        .attr('fill', 'blue');
  
      const xAxis = d3.axisBottom(xScale).tickFormat(i => i + 1);
      const yAxis = d3.axisLeft(yScale);
  
      svg.append('g')
        .attr('transform', `translate(0, ${height - padding})`)
        .call(xAxis);
  
      svg.append('g')
        .attr('transform', `translate(${padding}, 0)`)
        .call(yAxis);
    }, [data]);
  
    return (
        <div className="chart1">
            <div ClassName="chartContainer">
                <div id="chart"></div>
            </div>
        </div>
    )
  }
export default Sales