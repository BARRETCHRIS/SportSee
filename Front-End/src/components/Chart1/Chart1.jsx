import React from 'react'
import PropTypes from 'prop-types'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'

/**
 * Composant de graphique radar basé sur les données de performance utilisateur
 *
 * @param {Object} props - Les propriétés passées au composant
 * @param {Object} props.userPerformance - Les données de performance de l'utilisateur
 * @returns {JSX.Element} Le composant de graphique radar
 */

const categoryTranslations = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
};

function Chart1({ userPerformance, chartStyles }) {
    // Transformation des données pour le graphique radar
    const performanceData = userPerformance?.data?.data.map((item) => ({
        value: item.value,
        kind: categoryTranslations[item.kind] || 'Inconnu',
    }));

    // Styles de personnalisation
    const {
        backgroundColor = '#282d30',
        radarFillColor = '#fff',
        radarStrokeColor = '#fff',
        polarGridStrokeColor = '#fff',
        polarAngleAxisStrokeColor = '#fff',
        polarRadiusAxisStrokeColor = '#fff',
        angleAxisTickSpacing = 5, // Espace entre les labels et le graphique
    } = chartStyles || {};

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor}}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
                    <PolarGrid 
                        stroke={polarGridStrokeColor} 
                        strokeDasharray="none" // Style des lignes de grille
                        verticalLines={false} // Masquer les lignes verticales
                        radialLines={false} // Masquer les lignes radiales (barres de diamètre)
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke={polarGridStrokeColor} 
                        strokeDasharray="none" // Ligne de grille solide
                        verticalLines={false} // Masquer les lignes verticales
                        radialLines={false} // Masquer les lignes radiales
                        tick={{ fill: '#fff', fontSize: 12, fontWeight: 200 }} // Taille et couleur des labels
                        tickLine={false} // Cache les lignes des ticks
                        dy={angleAxisTickSpacing} // Espacement entre les labels et le graphique
                    />
                    <PolarRadiusAxis
                        stroke={polarRadiusAxisStrokeColor}
                        tick={{ fill: 'none' }} // Cache les chiffres de l'axe radial
                        axisLine={false} // Cache la ligne de l'axe radial
                        tickLine={false} // Cache les lignes des ticks
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke={radarStrokeColor}
                        fill={radarFillColor}
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

Chart1.propTypes = {
    userPerformance: PropTypes.shape({
        data: PropTypes.shape({
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.number.isRequired,
                    kind: PropTypes.number.isRequired,
                })
            ).isRequired,
            kind: PropTypes.objectOf(PropTypes.string).isRequired,
        }).isRequired,
    }).isRequired,
    title: PropTypes.string,
    chartStyles: PropTypes.shape({
        backgroundColor: PropTypes.string,
        radarFillColor: PropTypes.string,
        radarStrokeColor: PropTypes.string,
        polarGridStrokeColor: PropTypes.string,
        polarAngleAxisStrokeColor: PropTypes.string,
        polarRadiusAxisStrokeColor: PropTypes.string,
    }),
};

export default Chart1
