import PropTypes from 'prop-types'

import './thumbnail.scss'

/**
 * Render an article (Thumbnail) containing an image and text
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function Thumbnail({ userKeyData, unit, subtitle, className, alt, logo }) {
	return (
		<article className="thumb ">
			<div className={`thumb_image ${className}`}>
				<img src={logo} alt={alt} className="thumb_image_icon" />
			</div>
			<div className="thumb_wrapper">
				<p className="thumb_wrapper_title">
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="thumb_wrapper_subtitle">{subtitle}</p>
			</div>
		</article>
	)
}

// Définition des PropTypes pour le composant Thumbnail
Thumbnail.propTypes = {
	// userKeyData est un nombre (requis) qui représente les données clés de l'utilisateur
	userKeyData: PropTypes.number.isRequired,
	
	// unit est une chaîne de caractères (requis) qui représente l'unité de mesure
	unit: PropTypes.string.isRequired,
	
	// subtitle est une chaîne de caractères (requis) qui représente le sous-titre de la vignette
	subtitle: PropTypes.string.isRequired,
	
	// className est une chaîne de caractères (optionnelle) qui représente la classe CSS pour l'image
	className: PropTypes.string,
	
	// alt est une chaîne de caractères (requis) qui représente le texte alternatif pour l'image
	alt: PropTypes.string.isRequired,
	
	// logo est une chaîne de caractères (requis) qui représente le chemin ou l'élément pour l'image
	logo: PropTypes.string.isRequired,
}

export default Thumbnail