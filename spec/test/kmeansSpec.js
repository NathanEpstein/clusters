'use strict'

var clusterMaker = require('../../clusters.js');

describe("data", function() {

  it("is initially empty", function() {
    expect(clusterMaker.data()).toEqual([]);
  });

  it("will not set invalid data", function() {
    clusterMaker.data([[1, 2], [1, 2, 3]]);

    expect(clusterMaker.data()).toEqual([]);
  });

  it("will set valid data", function() {
    var data = [[1, 0], [0, 1], [0, 0], [-10, 10], [-9, 11], [10, 10], [11, 12]];
    clusterMaker.data(data);

    expect(clusterMaker.data()).toBe(data);
  });

});

describe("the number of iterations and clusters (k)", function() {

  it("they are initialized with default values", function() {
    expect(typeof clusterMaker.k()).toEqual("undefined");
    expect(clusterMaker.iterations()).toEqual(Math.pow(10,3));
  });

  it("they will not set invalid values", function() {
    clusterMaker.k(1.5);
    clusterMaker.iterations(100.5);

    expect(typeof clusterMaker.k()).toEqual("undefined");
    expect(clusterMaker.iterations()).toEqual(Math.pow(10,3));

    clusterMaker.k(-2);
    clusterMaker.iterations(-100);

    expect(typeof clusterMaker.k()).toEqual("undefined");
    expect(clusterMaker.iterations()).toEqual(Math.pow(10,3));
  });

  it("they will set a valid values", function() {
    clusterMaker.k(3)
    clusterMaker.iterations(750);

    expect(clusterMaker.k()).toEqual(3);
    expect(clusterMaker.iterations()).toEqual(750);
  });

});


describe("clusters", function() {

  it("it produces the correct centroids and clusters", function() {
    expect(clusterMaker.clusters()).toEqual([
      {
        centroid: [21 / 2 , 22 / 2],
        points: [[10, 10], [11, 12]],
      },
      {
        centroid: [-19 / 2, 21 / 2],
        points: [[-10, 10], [-9, 11]],
      },
      {
        centroid: [1 / 3, 1 / 3],
        points: [[1, 0], [0, 1], [0, 0]],
      }
    ]);
  });

});

