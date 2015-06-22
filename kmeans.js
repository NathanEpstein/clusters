function kmeans(data, k, iterations) {
  iterations = iterations || Math.pow(10,4);

  // intialize centroids randomly
  var centroids = [];
  var bounds = getBounds(data);
  for (var i = 0; i < k; i++) {
    centroids[i] = bounds.map(function(range, j) {
      return (Math.random() * (range.max - range.min) + range.min);
    });
  };

  //until convergence

    // for each training point
      // set c_i (label for point i)
    data.forEach(function(vector, ))

    // for each of the k centroids
      // set the location of the centroid using the label locations.
};

function getBounds(data) {
  var bounds = data[0].map(function(value) {
    return {min: value, max: value};
  });

  data.forEach(function(array) {
    array.forEach(function(datum, i) {
      if (datum < bounds[i].min) bounds[i].min = datum;
      if (datum > bounds[i].max) bounds[i].max = datum;
    });
  });
  return bounds;
};


