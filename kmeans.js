function kmeans(vectors, k, iterations) {
  iterations = iterations || Math.pow(10,4);

  // intialize centroids randomly
  var centroids = [];
  var bounds = getBounds(vectors);
  for (var i = 0; i < k; i++) {
    centroids[i] = bounds.map(function(range, j) {
      return (Math.random() * (range.max - range.min) + range.min);
    });
  };

  //until convergence
  for (var iter = 0; iter < iterations; iter++) {
    // for each training vector
    vectors.forEach(function(vector, i) {
      // set c_i (label for vector i)
      var minDistance = 0;

    });

    // for each of the k centroids
      // set the location of the centroid using the label locations.
  };
};

function getBounds(vectors) {
  var bounds = vectors[0].map(function(element) {
    return {min: element, max: element};
  });

  vectors.forEach(function(vector) {
    vector.forEach(function(element, i) {
      if (element < bounds[i].min) bounds[i].min = element;
      if (element > bounds[i].max) bounds[i].max = element;
    });
  });
  return bounds;
};

function sumOfSquareDiffs(oneVector, anotherVector) {
  var squareDiffs = oneVector.map(function(element,i) {
    return Math.pow(element - anotherVector[i], 2);
  });
  return Math.pow(squareDiffs.reduce(function(a, b) { return a + b }, 0), 0.5);
};


