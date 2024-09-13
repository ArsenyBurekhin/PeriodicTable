function compareDensityToWater(element) {
    const waterDensity = 1.0; // g/cm³

    if (!element || typeof element.density !== 'number') {
        return "UNKNOWN";
    }

    const relativeDensity = element.density / waterDensity;

    if (relativeDensity < 0.5) {
        return "FLOATING_ABOVE_WATER";
    } else if (relativeDensity >= 0.5 && relativeDensity < 0.9) {
        return "HALF_SUNKEN";
    } else if (relativeDensity >= 0.9 && relativeDensity < 1.0) {
        return "ALMOST_SUNKEN";
    } else if (relativeDensity >= 1.0 && relativeDensity < 2.0) {
        return "BELOW_THE_SURFACE";
    } else {
        return "ON_THE_BOTTOM";
    }
}