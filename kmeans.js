function kmeans(data, config) {
  // defaults for iterations and number of clusters
  var iterations = config.iterations || Math.pow(10,4);
  var k = config.k || Math.sqrt(Math.round(data.length / 2));

  // initialize point objects with data
  points = data.map(function(vector) { return new Point(vector) });

  // intialize centroids randomly
  var centroids = [];
  var bounds = getBounds(points.map(function(point){ return point.location }));
  for (var i = 0; i < k; i++) {
    centroids.push(new Centroid(bounds.map(function(range, j) {
      return (Math.random() * (range.max - range.min) + range.min);
    })));
  };

  // update labels and centroid locations until convergence
  for (var iter = 0; iter < iterations; iter++) {
    points.forEach(function(point) { point.updateLabel(centroids) });
    centroids.forEach(function(centroid) { centroid.updateLocation(points) });
  };

  // return something with point labels, or the clusters
  return points;
};

// objects
function Point(location) {
  this.location = getterSetter(location);
  this.label = getterSetter();
  this.updateLabel = function (centroids) {
    var distancesSquared = centroids.map(function(centroid) {
      return sumOfSquareDiffs(point.location, centroid.location);
    });
    point.label = mindex(distancesSquared);
  };
};

function Centroid(initialLocation) {
  this.location = getterSetter(initialLocation);
  this.updateLocation = function(points) {
    //logic on updating in each iteration
  };
};

// convenience functions
function getterSetter(initialValue) {
  var thingToGetSet = initialValue;
  return function(newValue) {
    if (typeof newValue === 'undefined') return thingToGetSet;
    thingToGetSet = newValue;
  };
};

function sumOfSquareDiffs(oneVector, anotherVector) {
  var squareDiffs = oneVector.map(function(component,i) {
    return Math.pow(component - anotherVector[i], 2);
  });
  return squareDiffs.reduce(function(a, b) { return a + b }, 0);
};

function mindex(array) {
  var min = array.reduce(function(a, b) {
    return Math.min(a, b);
  });
  return array.indexOf(min);
};

function getBounds(points) {
  var bounds = points[0].map(function(component) {
    return {min: component, max: component};
  });

  points.forEach(function(x_i) {
    x_i.forEach(function(component, j) {
      if (component < bounds[j].min) bounds[j].min = component;
      if (component > bounds[j].max) bounds[j].max = component;
    });
  });
  return bounds;
};

