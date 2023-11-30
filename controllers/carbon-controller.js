const MATERIAL_EMISSIONS = {
    plastic: 6.0,
    metal: 5.0,
    paper: 2.0,
    aluminum: 20.0,
    denim: 27.0,
    nylon: 9.0,
    charcoal: 8.0,
  };
  
  const calculateCarbonFootprint = (weight, material) => {
    const lowercaseMaterial = material.toLowerCase();
  
    if (!MATERIAL_EMISSIONS.hasOwnProperty(lowercaseMaterial)) {
      return null;
    }
  
    let weightInGrams = parseFloat(weight);
    if (isNaN(weightInGrams)) {
      return null;
    }
  
    const emissionFactor = MATERIAL_EMISSIONS[lowercaseMaterial];
    const carbonFootprint = weightInGrams * emissionFactor;
  
    return carbonFootprint;
  };
  
  const getCarbonFootprintForListing = (req, res) => {
    try {
      const { listing_weight, listing_material } = req.body;
  
      if (!listing_weight || !listing_material) {
        return res.status(400).json({ error: 'Listing weight and material are required.' });
      }
  
      const materials = listing_material.split(',').map((material) => material.trim());
      let totalCarbonFootprint = 0;
  
      for (const material of materials) {
        const carbonFootprint = calculateCarbonFootprint(listing_weight, material);
        if (carbonFootprint === null) {
          return res.status(400).json({ error: `Material "${material}" not supported for carbon footprint calculation.` });
        }
        totalCarbonFootprint += carbonFootprint;
      }
  
      res.json({ carbonFootprint: totalCarbonFootprint });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getCarbonFootprintForListing,
  };
  