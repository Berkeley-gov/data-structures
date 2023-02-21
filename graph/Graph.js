/**
 * Graphs are the perfect data structure for modeling networks, which make them an indispensable piece of for the data structure toolkit. 
 * They’re composed of nodes, or vertices, which hold data, and edges, which are a connection between two vertices. A single node is a vertex.
 */ 
module.exports =  class Graph {
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
    
        return newVertex;
    }
    
    removeVertex(vertex) {
        this.vertices = this.vertices.filter(v => v !== vertex);
    }
    
    addEdge(vertexOne, vertexTwo, weight) {
        const edgeWeight = this.isWeighted ? weight : null;
    
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
          vertexOne.addEdge(vertexTwo, edgeWeight);
    
          if (!this.isDirected) {
            vertexTwo.addEdge(vertexOne, edgeWeight);
          }
        } else {
          throw new Error('Expected Vertex arguments.');
        }
    }
    
    removeEdge(vertexOne, vertexTwo) {
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
          vertexOne.removeEdge(vertexTwo);
    
          if (!this.isDirected) {
            vertexTwo.removeEdge(vertexOne);
          }
        } else {
          throw new Error('Expected Vertex arguments.');
        }
    }
    
    print() {
        this.vertices.forEach(vertex => vertex.print());
    }
};