// Leaflet icon fix for bundler environments
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// This fixes the broken icon paths when using Leaflet with bundlers like Vite/Webpack
export function setupLeafletIcons(): void {
  try {
    // Remove the broken _getIconUrl method
    delete (L.Icon.Default.prototype as any)._getIconUrl
    
    // Set the correct icon URLs
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    })
    
    console.log('Leaflet icons configured successfully')
  } catch (error) {
    console.warn('Failed to configure Leaflet icons:', error)
  }
}

export default L
