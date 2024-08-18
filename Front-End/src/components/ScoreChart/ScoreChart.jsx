import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import './scoreChart.scss';

/**
 * Renders a Radial Bar Chart using Recharts to display a score.
 * 
 * This component visualizes the user's score as a radial bar chart, with the ability to display the score from either `todayScore` or `score` data properties.
 *
 * @category Components
 * @component
 * @returns {React.Component} A React component displaying a radial bar chart with the user's score.
 */
function ScoreChart({ data }) {
    // Determine the score to display, using `todayScore` if available, otherwise fallback to `score`
    const score = data.todayScore ? data.todayScore : data.score;

    // Prepare data for the radial bar chart
    const dataArray = [{ name: 'score', value: score }];

    return (
        <>
            <h3 className="scoreChart_title">Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%" // Inner radius of the radial bar chart
                    outerRadius="80%" // Outer radius of the radial bar chart
                    data={dataArray}
                    startAngle={90} // Start angle for the radial bars
                    endAngle={450}  // End angle for the radial bars
                >
                    {/* Background radial bar for visual effect */}
                    <RadialBar
                        data={[{ value: 1 }]} // Static data for the background bar
                        dataKey="value"
                        barSize={20} // Size of the radial bar
                        fill="#FFF" // Fill color of the background bar
                        isAnimationActive={false} // Disable animation for the background bar
                    />
                    {/* Main radial bar representing the score */}
                    <RadialBar
                        dataKey="value"
                        barSize={10} // Size of the main radial bar
                        cornerRadius={100} // Corner radius for a rounded appearance
                        fill="#FF0000" // Fill color of the main radial bar
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="scoreChart_label">
                <p className="percent">
                    {/* Display the score as a percentage */}
                    {data.score ? data.score * 100 : data.todayScore * 100}%
                    <span>de votre<br />objectif</span>
                </p>
            </div>
        </>
    );
}

ScoreChart.propTypes = {
    /**
     * The data object containing the user's score information.
     * It can include `score` or `todayScore` to display the current score.
     * 
     * @type {Object}
     */
    data: PropTypes.shape({
        score: PropTypes.number, // The overall score (optional)
        todayScore: PropTypes.number // The score for today (optional)
    }).isRequired,
};

export default ScoreChart;
