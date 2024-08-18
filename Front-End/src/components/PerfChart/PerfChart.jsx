import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
	PolarRadiusAxis,
	Text,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * PerfChart Component
 * 
 * This component renders a performance radar chart using the Recharts library.
 * It visualizes user performance metrics across different categories, with custom labels.
 * 
 * @category Components
 * @component
 * @returns {React.Component} A React component that displays a radar chart.
 */
function PerfChart({ data }) {
	/**
	 * Render custom labels for the PolarAngleAxis of the RadarChart.
	 * The labels are displayed at the appropriate angles around the chart.
	 * 
	 * @param {Object} payload - The payload containing the label data.
	 * @param {Number} x - The x position of the label.
	 * @param {Number} y - The y position of the label.
	 * @param {Number} cx - The x position of the center of the chart.
	 * @param {Number} cy - The y position of the center of the chart.
	 * @param {Object} rest - Other properties passed to the label component.
	 * @returns {React.Component} A Text component that displays the formatted label.
	 */
	const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
		/**
		 * Translate the label values from English to French.
		 * 
		 * @param {String} value - The value of the label in English.
		 * @returns {String} The translated label in French.
		 */
		const formatLabel = (value) => {
			switch (value) {
				case 'Energy':
					return 'Énergie';
				case 'Strength':
					return 'Force';
				case 'Speed':
					return 'Vitesse';
				case 'Intensity':
					return 'Intensité';
				default:
					return value;
			}
		};

		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 10}
				x={x + (x - cx) / 100}
				fill="#FFFFFF"
				fontSize="12px"
			>
				{formatLabel(
					data.kind[payload.value].charAt(0).toUpperCase() +
						data.kind[payload.value].slice(1)
				)}
			</Text>
		);
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				outerRadius="70%"
				data={[...data.data].reverse()}
				startAngle={90}
				endAngle={-270}
				viewBox={{ x: 0, y: 0, width: 263, height: 258 }}
				margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			>
				{/* Grid lines only on circular axes, no radial lines */}
				<PolarGrid radialLines={false} />
				
				{/* Custom angle axis labels */}
				<PolarAngleAxis
					dataKey="kind"
					tick={(props) => renderPolarAngleAxis(props)}
				/>
				
				{/* Hide radial axis labels and lines */}
				<PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
				
				{/* Radar element representing the user's performance */}
				<Radar
					dataKey="value"
					stroke="#FF0101"
					fill="#FF0101"
					fillOpacity={0.6}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
}

PerfChart.propTypes = {
	/**
	 * Data to be displayed in the radar chart.
	 * The object should contain a `kind` property mapping to performance categories
	 * and a `data` array containing the performance values for each category.
	 */
	data: PropTypes.object.isRequired,
};

export default PerfChart
