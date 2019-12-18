import React from "react";
import "./svg.css"

function Svg(props) {
    return (
        <div>
            <svg width="100%" height="100%" class="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle-chart-background" stroke="#efefef" stroke-width="3" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <circle class="circle-chart-circle" stroke="#ffec26" stroke-width="3" stroke-dasharray="65,100" stroke-linecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <g class="gpa-text">
                    <text x="50%" y="50%" class="chart-label">Health</text>
                    <text x="50%" y="50%" class="chart-number">65%</text>
                </g>
            </svg>
        </div>
    );
}

export default Svg