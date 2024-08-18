import PropTypes from 'prop-types'

/**
 * AverageChartToolKit Component
 * 
 * This component renders a custom tooltip for the `AverageChart` component.
 * It displays the session length in minutes when the user hovers over a data point in the chart.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.active - Indicates whether the tooltip is active (i.e., whether the user is hovering over a data point).
 * @param {Array} props.payload - An array containing the data for the hovered data point. The array should have at least one object with a `value` property representing the session length.
 * @returns {React.Component|null} A React component displaying the tooltip content, or null if the tooltip is not active or data is missing.
 */
function AverageChartToolKit({ active, payload }) {
	// If the tooltip is active and has a valid payload, render the tooltip
	if (active && payload && payload.length) {
		return (
			<div className="toolkit">
				{/* Display the session length in minutes */}
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	// Return null if the tooltip is not active or the payload is empty
	return null
}

AverageChartToolKit.propTypes = {
	/**
	 * Indicates whether the tooltip is currently active (user is hovering over a data point).
	 */
	active: PropTypes.bool,
	/**
	 * The data payload for the tooltip, containing information about the hovered data point.
	 * Expects an array with at least one object containing a `value` property.
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default AverageChartToolKit
