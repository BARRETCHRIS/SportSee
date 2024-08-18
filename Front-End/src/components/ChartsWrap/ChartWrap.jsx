import PropTypes from 'prop-types'

import './ChartWrap.scss'

/**
 * ChartsWrap Component
 * 
 * This component renders a wrapper `div` element that acts as a container for charts. 
 * It allows you to pass custom CSS classes and content (such as charts) as props, enabling flexible styling and composition.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props
 * @param {string} props.className - Additional CSS class(es) to apply to the wrapper div. This allows for custom styling.
 * @param {React.ReactNode} props.content - The content to be rendered inside the wrapper. Typically, this would be chart components or related elements.
 * @returns {React.Component} A React component that wraps the provided content in a styled `div`.
 */
function ChartsWrap({ className, content }) {
	// Render the wrapper div with the provided className and content
	return <div className={`charts-wrap ${className}`}>{content}</div>
}

ChartsWrap.propTypes = {
	/**
	 * Additional CSS class name(s) for the wrapper div. 
	 * Allows for custom styling of the chart container.
	 */
	className: PropTypes.string,
	/**
	 * The content to be displayed within the wrapper div. 
	 * Typically this will be a chart or related components.
	 * This prop is required.
	 */
	content: PropTypes.node.isRequired,
}

export default ChartsWrap