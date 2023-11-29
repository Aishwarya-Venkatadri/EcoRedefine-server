

const MATERIAL_EMISSIONS = {
    plastic: 6.0,       // Estimated emission factor for plastic (kg CO2 per kg of plastic)
    metal: 5.0,         // Estimated emission factor for metal (kg CO2 per kg of metal)
    paper: 2.0,         // Estimated emission factor for paper (kg CO2 per kg of paper)
    aluminum: 20.0,      // Estimated emission factor for aluminum (kg CO2 per kg of aluminum)
    denim: 27.0,        // Estimated emission factor for denim (kg CO2 per kg of denim)
    nylon: 9.0,         // Estimated emission factor for nylon (kg CO2 per kg of nylon)
    charcoal: 8.0,     // Estimated emission factor for charcoal (kg CO2 per kg of charcoal)
  
  };
  
  const calculateCarbonFootprint = (weight, material) => {
    const lowercaseMaterial = material.toLowerCase();
  
    if (!MATERIAL_EMISSIONS.hasOwnProperty(lowercaseMaterial)) {
      return null; // Material not supported
    }
  
    let weightInGrams = parseFloat(weight);
    if (isNaN(weightInGrams)) {
      return null; // Invalid weight
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
  
      const carbonFootprint = calculateCarbonFootprint(listing_weight, listing_material);
  
      if (carbonFootprint === null) {
        return res.status(400).json({ error: 'Material not supported for carbon footprint calculation.' });
      }
  
      res.json({ carbonFootprint });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getCarbonFootprintForListing,
  };
  