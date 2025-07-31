# 🌌 Solar System Explorer

A stunning 3D interactive Solar System visualization built with Three.js that allows you to explore all planets, dwarf planets, and celestial bodies in our solar system with realistic textures and educational content.

![Solar System Explorer](https://img.shields.io/badge/Three.js-3D%20Visualization-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![WebGL](https://img.shields.io/badge/WebGL-Supported-brightgreen)

## ✨ Features

- **🌍 Complete Solar System**: All 8 planets + Sun + Dwarf planets
- **🪐 Realistic Textures**: High-quality 8K planet textures from NASA
- **⭐ Interactive Navigation**: Hover tooltips and click for detailed information
- **📚 Educational Content**: Facts, descriptions, and scientific data for each planet
- **🌙 Special Effects**: Earth's clouds, Venus atmosphere, Saturn's rings, Earth's moon
- **🎮 Responsive Controls**: Mouse/touch navigation with orbit controls
- **🚀 Performance Optimized**: Smooth 60fps rendering with optimized textures
- **📱 Mobile Friendly**: Works on desktop, tablet, and mobile devices

## 🎮 Live Demo

[Try the Solar System Explorer Online](https://your-demo-link.com)

## 📸 Screenshots

![Solar System Overview](screenshots/solar-system.png)
*Complete solar system with all planets orbiting the Sun*

![Planet Interaction](screenshots/planet-interaction.png)
*Interactive tooltips and detailed information panels*

![Saturn with Rings](screenshots/saturn-rings.png)
*Saturn with realistic ring system and atmospheric effects*

## 🚀 Quick Start

### Prerequisites
- Modern web browser with WebGL support
- Local web server (for texture loading)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/solar-system-explorer.git
   cd solar-system-explorer
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

## 🎯 How to Use

### Navigation Controls
- **🖱️ Mouse/Touch**: 
  - Left click + drag: Rotate camera
  - Right click + drag: Pan camera
  - Scroll wheel: Zoom in/out
- **👆 Interaction**:
  - Hover over planets: See planet names
  - Click on planets: View detailed information
- **🎛️ UI Controls**:
  - Reset Camera: Return to default view
  - Toggle Orbits: Show/hide orbital paths
  - Toggle Rotation: Start/stop planet rotation

### Planets Available
- ☀️ **Sun** - Our star with glowing effects
- ☿ **Mercury** - Smallest and innermost planet
- ♀ **Venus** - Earth's sister planet with toxic atmosphere
- 🌍 **Earth** - Our home planet with clouds and moon
- ♂ **Mars** - The Red Planet
- ♃ **Jupiter** - Largest planet with Great Red Spot
- ♄ **Saturn** - Famous for its spectacular rings
- ♅ **Uranus** - Ice giant rotating on its side
- ♆ **Neptune** - Windiest planet with fastest winds

### Dwarf Planets
- ⚳ **Ceres** - Largest object in the asteroid belt
- ⚷ **Haumea** - Egg-shaped dwarf planet
- ⚶ **Makemake** - Bright dwarf planet in Kuiper Belt
- ⚴ **Eris** - Most massive dwarf planet

## 🛠️ Project Structure

```
solar-system-explorer/
├── index.html              # Main HTML file
├── index.js                # Main application logic
├── style.css               # Styling and UI components
├── README.md               # This file
├── src/
│   ├── planets.js          # Planet data and creation functions
│   └── getStarFieldSystem.js # Star field animation
└── assets/
    └── textures/
        ├── 1k/             # Low-resolution textures
        ├── 2k/             # Medium-resolution textures
        ├── 4k/             # High-resolution textures
        └── 8k/             # Ultra-high-resolution textures
```

## 🎨 Customization

### Adding New Planets

1. **Add planet data** in `src/planets.js`:
   ```javascript
   newPlanet: {
       name: "New Planet",
       radius: 0.8,
       distance: 25,
       rotationSpeed: 0.008,
       orbitSpeed: 0.005,
       texture: "./assets/textures/8k/new_planet.jpg",
       description: "Description of the new planet...",
       facts: [
           "Distance from Sun: X million km",
           "Surface Temperature: X°C",
           "Interesting fact about the planet"
       ]
   }
   ```

2. **Place texture file** in the appropriate resolution folder
3. **Restart the application** - the planet will be automatically added

### Modifying Planet Properties

```javascript
// In src/planets.js - planetData object
planetName: {
    name: "Planet Name",
    radius: 1.0,              // Size relative to Earth
    distance: 20,             // Distance from Sun (AU)
    rotationSpeed: 0.01,      // Self-rotation speed
    orbitSpeed: 0.01,         // Orbital speed
    texture: "path/to/texture.jpg",
    description: "Planet description...",
    facts: ["Fact 1", "Fact 2", "Fact 3"]
}
```

### Styling Customization

```css
/* Modify tooltip appearance */
.tooltip {
    background: rgba(0, 0, 0, 0.9);
    color: white;
    border: 1px solid #4fc3f7;
    /* Add your custom styles */
}

/* Modify info panel */
.info-panel {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #333;
    /* Add your custom styles */
}
```

## 🔧 Troubleshooting

### Common Issues

#### Textures Not Loading
```
Error: Failed to load texture
```
**Solution:**
- Ensure you're running from a web server (not file://)
- Check file paths are correct
- Verify texture files exist in the specified location

#### Planets Not Visible
```
Planets appear but are too small/dark
```
**Solution:**
- Adjust planet radius in planetData
- Increase lighting intensity
- Check camera position

#### Performance Issues
```
Low frame rate or lag
```
**Solution:**
- Reduce texture resolution (use 2K instead of 8K)
- Decrease geometry complexity
- Disable shadows if not needed

#### Hover Not Working
```
Tooltips don't appear on hover
```
**Solution:**
- Check raycaster setup
- Verify planet meshes have userData
- Ensure mouse event listeners are active

### Debug Mode
Add this to your browser console for debugging:
```javascript
// Check if planets are loaded
console.log('Planets:', planets);

// Check camera position
console.log('Camera position:', camera.position);

// Check scene objects
console.log('Scene children:', scene.children);
```

## 📚 API Reference

### Core Functions

#### `createPlanet(name, data)`
Creates a 3D planet object with textures and features.
```javascript
const planet = createPlanet('earth', planetData.earth);
```

#### `createOrbitPath(distance)`
Creates a circular orbit path for planets.
```javascript
const orbit = createOrbitPath(planetData.earth.distance);
```

#### `selectPlanet(planetName)`
Selects a planet and shows detailed information.
```javascript
selectPlanet('mars');
```

### Event Handlers

#### `checkHover(event)`
Handles mouse hover detection for tooltips.

#### `showTooltip(event, planetName)`
Displays planet name tooltip.

## 🌟 Free Resources

### Texture Sources
- **NASA Image Library**: https://images.nasa.gov/
- **Solar System Scope**: https://www.solarsystemscope.com/textures/
- **ESA Hubble**: https://esahubble.org/images/
- **Wikimedia Commons**: https://commons.wikimedia.org/wiki/Category:Space

### Learning Resources
- **Three.js Documentation**: https://threejs.org/docs/
- **WebGL Fundamentals**: https://webglfundamentals.org/
- **Space Science**: https://solarsystem.nasa.gov/

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- **Three.js**: MIT License
- **NASA Images**: Public Domain
- **ESA Images**: Public Domain

## 🙏 Acknowledgments

- **NASA** for providing high-quality planetary textures and data
- **ESA** for additional space imagery and scientific data
- **Three.js Community** for the amazing 3D graphics library
- **Solar System Scope** for texture resources
- **All contributors** who helped improve this project

## 📞 Support

If you encounter any issues or have questions:

- **Create an issue** on GitHub
- **Check the troubleshooting** section above
- **Review the documentation** in the `/docs` folder

## 🚀 Future Enhancements

- [ ] Add asteroid belt visualization
- [ ] Include more moons and satellites
- [ ] Add spacecraft models (Voyager, Cassini, etc.)
- [ ] Implement time-based orbital mechanics
- [ ] Add sound effects and background music
- [ ] Create VR/AR support
- [ ] Add multiplayer exploration mode
- [ ] Include real-time space weather data

## 📊 Performance Metrics

- **Target FPS**: 60 FPS
- **Texture Resolution**: Up to 8K
- **Supported Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **File Size**: ~50MB (with all textures)

---

**Made with ❤️ and Three.js**

*Explore the cosmos from your browser!* 