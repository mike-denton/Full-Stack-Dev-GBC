db.getCollection('Restaurants').find(
     { "cuisine": {$eq: "Japanese" } }, // query
     { "restaurant_id": 1, "cuisine":1, "name":1, "city": 1}   // field projection
    ).sort({ "restaurant_id": 1 })
