import {
	XAxis,
	Tooltip,
	BarChart,
	CartesianGrid,
	YAxis,
	Bar,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

import ActivityChartToolKit from './ActivityChartToolKit'
import './activityChart.scss'

// Constants for customizing the chart's appearance
const TICK_COLOR = '#9B9EAC'
const STROKE_COLOR = '#DEDEDE'
const BAR_COLOR_KG = '#282D30'
const BAR_COLOR_CAL = '#E60000'

/**
 * ActivityChart Component
 * 
 * This component renders a bar chart representing daily activity using the Recharts library.
 * It shows two bars for each day: one for the weight (kg) and another for the calories burned (kCal).
 *
 * @category Components
 * @component
 * @param {Object} props - The component props
 * @param {Array} props.data - The data to be displayed in the chart. Each data object represents a day and should contain `day`, `kilogram`, and `calories` fields.
 * @returns {React.Component} A React component displaying the activity bar chart.
 */
function ActivityChart({ data }) {
	return (
		<>
			{/* Chart Title */}
			<h3 className="activityChart_title">Activité quotidienne</h3>
			
			{/* ResponsiveContainer makes the chart responsive to the container's size */}
			<ResponsiveContainer width="100%" height="100%">
				{/* BarChart component from Recharts with data and bar configuration */}
				<BarChart data={data} barSize={7} barGap={8}>
					{/* CartesianGrid adds grid lines to the chart, horizontal only */}
					<CartesianGrid strokeDasharray="3" vertical={false} />
					
					{/* XAxis component configures the x-axis (dates) */}
					<XAxis
						dataKey="day"
						tick={{ fill: TICK_COLOR }}
						tickLine={false}
						stroke={STROKE_COLOR}
						strokeWidth={2}
						tickMargin={16}
						tickFormatter={(day) => new Date(day).getDate()} // Formats the day to show only the date (e.g., 1, 2, 3)
					/>
					
					{/* YAxis for the kilogram data on the right side */}
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={30}
						tick={{ fill: TICK_COLOR }}
						tickLine={false}
						axisLine={false}
						domain={['dataMin-2', 'dataMax+1']} // Sets the y-axis domain with some padding
						tickCount={3} // Limits the number of ticks displayed
					/>
					
					{/* Hidden YAxis for the calories data, sharing the same domain as the kilogram axis */}
					<YAxis hide yAxisId="calories" />
					
					{/* Tooltip component to show additional information when hovering over bars */}
					<Tooltip
						content={<ActivityChartToolKit />}
						cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }} // Customizes the tooltip's cursor appearance
					/>
					
					{/* Bar for displaying the kilogram data */}
					<Bar
						name="Poids (kg)"
						dataKey="kilogram"
						yAxisId="kilogram"
						fill={BAR_COLOR_KG}
						radius={[3, 3, 0, 0]} // Rounds the top corners of the bars
					/>
					
					{/* Bar for displaying the calories data */}
					<Bar
						name="Calories brûlées (kCal)"
						dataKey="calories"
						yAxisId="calories"
						fill={BAR_COLOR_CAL}
						radius={[3, 3, 0, 0]} // Rounds the top corners of the bars
					/>
					
					{/* Legend component for describing the bars */}
					<Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize="10"
						height={60}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	)
}

// PropTypes for validating the props passed to the component
ActivityChart.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ActivityChart
