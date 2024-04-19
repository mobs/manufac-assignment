import data from '../data/Wine-Data.json';

export const getMeanOfFlavanoidsClassWise = () => {
    const meanFlavanoidsClassWise = {};

    data.forEach(property => {
        const label = property["Alcohol"];
        const flavanoids = parseFloat(property["Flavanoids"]);

        if (!isNaN(flavanoids)) {
            if (!(label in meanFlavanoidsClassWise)) {
                meanFlavanoidsClassWise[label] = { total: 0, count: 0 };
            }

            meanFlavanoidsClassWise[label].total += flavanoids;
            meanFlavanoidsClassWise[label].count++;
        }
    });

    for (const label in meanFlavanoidsClassWise) {
        const mean = meanFlavanoidsClassWise[label].total / meanFlavanoidsClassWise[label].count;
        meanFlavanoidsClassWise[label] = parseFloat(mean.toFixed(3));
    }

    return meanFlavanoidsClassWise;
}

export const getMedianOfFlavanoidsClassWise = () => {
    const medianFlavanoidsClassWise = {};

    data.forEach(property => {
        const label = property["Alcohol"];
        const flavanoids = parseFloat(property["Flavanoids"]);

        if (!isNaN(flavanoids)) {
            if (!(label in medianFlavanoidsClassWise)) {
                medianFlavanoidsClassWise[label] = [];
            }
            medianFlavanoidsClassWise[label].push(flavanoids);
        }
    });

    for (const label in medianFlavanoidsClassWise) {
        medianFlavanoidsClassWise[label].sort((a, b) => a - b);
        const length = medianFlavanoidsClassWise[label].length;
        const mid = Math.floor(length / 2);
        if (length % 2 === 0) {
            medianFlavanoidsClassWise[label] = (medianFlavanoidsClassWise[label][mid - 1] + medianFlavanoidsClassWise[label][mid]) / 2;
        } else {
            medianFlavanoidsClassWise[label] = medianFlavanoidsClassWise[label][mid];
        }
    }

    return medianFlavanoidsClassWise;
}

export const getModeOfFlavanoidsClassWise = () => {
    const modeFlavanoidsClassWise = {};

    data.forEach(property => {
        const label = property["Alcohol"];
        const flavanoids = parseFloat(property["Flavanoids"]);

        if (!isNaN(flavanoids)) {
            if (!(label in modeFlavanoidsClassWise)) {
                modeFlavanoidsClassWise[label] = {};
            }

            if (!(flavanoids in modeFlavanoidsClassWise[label])) {
                modeFlavanoidsClassWise[label][flavanoids] = 1;
            } else {
                modeFlavanoidsClassWise[label][flavanoids]++;
            }
        }
    });

    for (const label in modeFlavanoidsClassWise) {
        let maxCount = 0;
        let mode = null;
        for (const flavanoids in modeFlavanoidsClassWise[label]) {
            if (modeFlavanoidsClassWise[label][flavanoids] > maxCount) {
                maxCount = modeFlavanoidsClassWise[label][flavanoids];
                mode = parseFloat(flavanoids); 
            }
        }
        modeFlavanoidsClassWise[label] = mode;
    }

    return modeFlavanoidsClassWise;
}

export const createGammaProp = () => {
    data.forEach(property => {
        const ash = parseFloat(property["Ash"]);
        const hue = parseFloat(property["Hue"]);
        const magnesium = parseFloat(property["Magnesium"]);

        if (!isNaN(ash) && !isNaN(hue) && !isNaN(magnesium)) {
            const gamma = (ash * hue) / magnesium;
            property["Gamma"] = gamma.toFixed(3); // Limit to 3 decimal places
        } else {
            property["Gamma"] = null; // Set to null if any required property is not a number
        }
    });

    return data;
}

export const getMeanOfGammaClassWise = () => {
    const meanGammaClassWise = {};
    data = createGammaProp();

    data.forEach(property => {
        const label = property["Alcohol"];
        const gamma = parseFloat(property["Gamma"]);

        if (!isNaN(gamma)) {
            if (!(label in meanGammaClassWise)) {
                meanGammaClassWise[label] = { total: 0, count: 0 };
            }

            meanGammaClassWise[label].total += gamma;
            meanGammaClassWise[label].count++;
        }
    });

    for (const label in meanGammaClassWise) {
        const mean = meanGammaClassWise[label].total / meanGammaClassWise[label].count;
        meanGammaClassWise[label] = parseFloat(mean.toFixed(3)); // Limit to 3 decimal places
    }

    return meanGammaClassWise;
}

export const getMedianOfGammaClassWise = () => {
    const medianGammaClassWise = {};
    data = createGammaProp();

    data.forEach(property => {
        const label = property["Alcohol"];
        const gamma = parseFloat(property["Gamma"]);

        if (!isNaN(gamma)) {
            if (!(label in medianGammaClassWise)) {
                medianGammaClassWise[label] = [];
            }
            medianGammaClassWise[label].push(gamma);
        }
    });

    for (const label in medianGammaClassWise) {
        medianGammaClassWise[label].sort((a, b) => a - b);
        const length = medianGammaClassWise[label].length;
        const mid = Math.floor(length / 2);
        if (length % 2 === 0) {
            medianGammaClassWise[label] = (medianGammaClassWise[label][mid - 1] + medianGammaClassWise[label][mid]) / 2;
        } else {
            medianGammaClassWise[label] = medianGammaClassWise[label][mid];
        }
        medianGammaClassWise[label] = parseFloat(medianGammaClassWise[label].toFixed(3)); // Limit to 3 decimal places
    }

    return medianGammaClassWise;
}

export const getModeOfGammaClassWise = () => {
    const modeGammaClassWise = {};
    data = createGammaProp();

    data.forEach(property => {
        const label = property["Alcohol"];
        const gamma = parseFloat(property["Gamma"]);

        if (!isNaN(gamma)) {
            if (!(label in modeGammaClassWise)) {
                modeGammaClassWise[label] = {};
            }

            if (!(gamma in modeGammaClassWise[label])) {
                modeGammaClassWise[label][gamma] = 1;
            } else {
                modeGammaClassWise[label][gamma]++;
            }
        }
    });

    for (const label in modeGammaClassWise) {
        let maxCount = 0;
        let mode = null;
        for (const gamma in modeGammaClassWise[label]) {
            if (modeGammaClassWise[label][gamma] > maxCount) {
                maxCount = modeGammaClassWise[label][gamma];
                mode = parseFloat(gamma); // Convert mode to number
            }
        }
        modeGammaClassWise[label] = mode !== null ? parseFloat(mode.toFixed(3)) : null; // Limit to 3 decimal places
    }

    return modeGammaClassWise;
}