import PropTypes from 'prop-types'

/**
 * ActivityChartToolKit Component
 * 
 * This component renders a custom tooltip for the ActivityChart component.
 * It displays the weight (kg) and calories burned (kCal) for the hovered data point.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.active - Indicates whether the tooltip is active (i.e., whether the user is hovering over a data point).
 * @param {Array} props.payload - An array containing the data for the hovered data point. The array is expected to have at least one object with `kilogram` and `calories` properties.
 * @returns {React.Component|null} A React component displaying the tooltip content, or null if the tooltip is not active or data is missing.
 */
function ActivityChartToolKit({ active, payload }) {
	// If the tooltip is not active or payload is empty, do not render anything
	if (!active || !payload || !payload.length) return null

	// Extract kilogram and calories values from the payload data
	const { kilogram, calories } = payload[0].payload

	return (
		<div className="toolkit">
			{/* Display the weight (kg) */}
			<p>{kilogram + 'kg'}</p>
			{/* Display the calories burned (kCal) */}
			<p>{calories + 'Kcal'}</p>
		</div>
	)
}

// PropTypes for validating the props passed to the component
ActivityChartToolKit.propTypes = {
	active: PropTypes.bool, // Indicates whether the tooltip is currently active
	payload: PropTypes.arrayOf(PropTypes.object), // The data to be displayed in the tooltip
}

export default ActivityChartToolKit
