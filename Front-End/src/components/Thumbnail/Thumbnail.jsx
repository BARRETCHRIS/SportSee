import PropTypes from 'prop-types';
import './thumbnail.scss';

/**
 * Thumbnail Component
 * 
 * This component renders a thumbnail containing an image and associated text. It is used to display key user data with a corresponding unit, subtitle, and icon.
 *
 * @category Components
 * @component
 * @returns {React.Component} A React component that displays a thumbnail with an image and text.
 */
function Thumbnail({ userKeyData, unit, subtitle, className, alt, logo }) {
	return (
		<div className="thumb">
			{/* Image container with optional custom className */}
			<div className={`thumb_image ${className}`}>
				<img src={logo} alt={alt} className="thumb_image_icon" />
			</div>
			{/* Text content displaying the user data and subtitle */}
			<div className="thumb_wrapper">
				<p className="thumb_wrapper_title">
					{/* Display userKeyData with localization and append unit */}
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="thumb_wrapper_subtitle">{subtitle}</p>
			</div>
		</div>
	);
}

// Define propTypes for the Thumbnail component
Thumbnail.propTypes = {
	/**
	 * The key data of the user, typically a numeric value.
	 * This data is displayed prominently in the thumbnail.
	 */
	userKeyData: PropTypes.number.isRequired,

	/**
	 * The unit of measurement corresponding to the userKeyData (e.g., "kCal", "g").
	 * This string is appended directly after the userKeyData.
	 */
	unit: PropTypes.string.isRequired,

	/**
	 * A short description or label that explains what the userKeyData represents.
	 */
	subtitle: PropTypes.string.isRequired,

	/**
	 * Optional additional class name(s) for custom styling of the image container.
	 */
	className: PropTypes.string,

	/**
	 * The alternative text for the image, providing context for screen readers.
	 */
	alt: PropTypes.string.isRequired,

	/**
	 * The source path or URL of the image/logo displayed in the thumbnail.
	 */
	logo: PropTypes.string.isRequired,
};

export default Thumbnail;
