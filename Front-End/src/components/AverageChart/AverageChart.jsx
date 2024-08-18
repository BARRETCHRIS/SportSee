import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	YAxis,
	ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

import AverageChartToolKit from './AverageChartToolKit';

import './averageChart.scss';

/**
 * AverageChart Component
 * 
 * This component renders a line chart that displays the average session duration over a week using the Recharts library.
 * The x-axis represents the days of the week, and the y-axis (hidden) represents the duration of sessions.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props
 * @param {Array} props.data - An array of data objects representing session length per day. Each object should contain `day` and `sessionLength` properties.
 * @returns {React.Component} A React component that displays the average session durations in a line chart.
 */
function AverageChart({ data }) {
	/**
	 * Formats the day values on the x-axis.
	 * Converts numerical day values (1-7) to their corresponding weekday initials.
	 * 
	 * @param {number} value - The numerical representation of the day (1-7).
	 * @returns {string} The formatted label (e.g., 'L' for Monday).
	 */
	const formatLabel = (value) => {
		if (value === 1) return 'L' // Lundi
		if (value === 2) return 'M' // Mardi
		if (value === 3) return 'M' // Mercredi
		if (value === 4) return 'J' // Jeudi
		if (value === 5) return 'V' // Vendredi
		if (value === 6) return 'S' // Samedi
		if (value === 7) return 'D' // Dimanche
		return value
	}

	return (
		<>
			{/* Chart title, includes a line break for better readability */}
			<h3 className="averageChart_title">
				Durée moyenne des <br />
				sessions
			</h3>
			
			{/* ResponsiveContainer adjusts the chart to fit its parent container */}
			<ResponsiveContainer width="100%" height="95%">
				{/* LineChart displays the session duration data as a line graph */}
				<LineChart data={data}>
					{/* Line represents the data, with a gradient stroke and no dots on data points */}
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#colorUv)" // Uses a linear gradient for the line color
						strokeWidth={2}
						activeDot={{
							stroke: '#FFF',
							strokeWidth: 4,
							r: 2,
						}}
						dot={false} // Disables dots on the line
					/>
					
					{/* XAxis displays the days of the week */}
					<XAxis
						dataKey="day"
						axisLine={false} // Hides the axis line
						tickLine={false} // Hides the tick lines
						tick={{
							fill: 'rgba(255,255,255,0.6)',
							fontSize: '0.75rem',
						}}
						tickFormatter={formatLabel} // Formats the day labels using formatLabel function
						tickMargin={20}
					/>
					
					{/* Tooltip displays additional information when hovering over a point */}
					<Tooltip content={<AverageChartToolKit />} cursor={false} />
					
					{/* YAxis is hidden, but defines the domain of the data */}
					<YAxis hide domain={['dataMin-10', 'dataMax+10']} />
					
					{/* Linear gradient definition for the line color */}
					<defs>
						<linearGradient
							id="colorUv"
							x1="0%"
							y1="0"
							x2="100%"
							y2="0"
						>
							<stop
								offset="0%"
								stopColor="rgba(255, 255, 255, 0.3)"
							/>
							<stop
								offset="20%"
								stopColor="rgba(255, 255, 255, 0.4)"
							/>
							<stop
								offset="40%"
								stopColor="rgba(255, 255, 255, 0.5)"
							/>
							<stop
								offset="60%"
								stopColor="rgba(255, 255, 255, 0.6)"
							/>
							<stop
								offset="100%"
								stopColor="rgba(255, 255, 255, 1)"
							/>
						</linearGradient>
					</defs>
				</LineChart>
			</ResponsiveContainer>
		</>
	)
}

AverageChart.propTypes = {
	/**
	 * Data to be displayed in the chart
	 * @type {Array<{ day: number, sessionLength: number }>}
	 */
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AverageChart;
