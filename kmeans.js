function kmeans(points, k, iterations) {
  iterations = iterations || Math.pow(10,4);

  // intialize centroids randomly
  var centroids = [];
  var bounds = getBounds(points);
  for (var i = 0; i < k; i++) {
    centroids[i] = bounds.map(function(range, j) {
      return (Math.random() * (range.max - range.min) + range.min);
    });
  };

  //until convergence
  var c = points.map(function() { return 0 });
  for (var iter = 0; iter < iterations; iter++) {

    // for each training vector
    points.forEach(function(x_i, i) {
      // set c_i according to current mu_j (label for x_i)
      var distancesSquared = centroids.map(function(mu_j) {
        return sumOfSquareDiffs(x_i, mu_j);
      });
      c[i] = mindex(distancesSquared);
    });

    // for each of the k centroids
      // set the location of the centroid using the label locations.
  };
};

function getBounds(points) {
  var bounds = points[0].map(function(element) {
    return {min: element, max: element};
  });

  points.forEach(function(x_i) {
    x_i.forEach(function(element, j) {
      if (element < bounds[j].min) bounds[j].min = element;
      if (element > bounds[j].max) bounds[j].max = element;
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

function mindex(array) {
  var min = array.reduce(function(a, b) {
    return Math.min(a, b);
  });
  return array.indexOf(min);
};


