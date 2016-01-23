/**
 * Created by deves on 23-Jan-16.
 */

var cobraModel, mapData = {};

// Everything should be done after fetching BiGG model via a GET request.
$.getJSON('../../data/E coli core.json', function(data) {

    // Data(CoBRA Model) recieved from URL.
    cobraModel = data;
    console.log("COBRA model retreived successfully. Id: " + cobraModel['id']);

    var degrees = {};
    mapData['nodes'] = [];
    var metaboliteCount = 0;

    // Adding metabolites as nodes to graph.
    cobraModel['metabolites'].forEach(function(metabolite){
        metaboliteCount++;
        mapData['nodes'].push({
            "id": metabolite['id'],
            "label": metabolite['name'],
            "size": Math.abs(metabolite['charge'])+1,
            "x": 100 * Math.cos(2 * Math.random() * cobraModel['metabolites'].length * Math.PI / cobraModel['metabolites'].length),
            "y": 100 * Math.sin(2 * Math.random() * cobraModel['metabolites'].length * Math.PI / cobraModel['metabolites'].length),
            "color": "blue"
        });
        degrees[metabolite['id']] = { "type": "metabolite" };

    });

    mapData['edges'] = [];
    var reactionCount = 0, edgeCount = 0;

    // Representing reactions in the graph.
    cobraModel['reactions'].forEach(function(reaction){

        // Every reaction is also a node to which all the reactant and product
        // metabolites are linked.
        mapData['nodes'].push({
            "id": reaction['id'],
            "label": reaction['name'],
            "size": 1,
            "x": 100 * Math.sin(2 * Math.random() * cobraModel['metabolites'].length * Math.PI / cobraModel['metabolites'].length),
            "y": 100 * Math.cos(2 * Math.random() * cobraModel['metabolites'].length * Math.PI / cobraModel['metabolites'].length),
            "color": "green"
        });

        // An edge connects a metabolite(reactant/product) to a reaction.
        degrees[reaction['id']] = { "type": "reaction" };
        for(var key in reaction['metabolites']) {
            if (reaction['metabolites'].hasOwnProperty(key)) {
                mapData['edges'].push({
                    "id": reaction['id'] + "." + key,
                    "label": reaction['name'],
                    "source": key,
                    "target": reaction['id'],
                    "type": "arrow",
                    "size": 10
                });
                edgeCount++;
            };
        }
        reactionCount++;
    });


    // JSNetworkX code.

    var G = new jsnx.DiGraph();


    mapData.nodes.forEach(function(node){

        G.addNode(node.id, node);

    });

    mapData.edges.forEach(function (edge) {
        G.addEdge(edge.source, edge.target);
    })

    jsnx.draw(G, {
        element: '#container'
    });


    // Demo map data to debug.
    /*
     mapData = {
     "nodes": [{
     "id": "n0",
     "label": "A node",
     "x": 0,
     "y": 0,
     "size": 3
     }, {
     "id": "n1",
     "label": "Another node",
     "x": 3,
     "y": 1,
     "size": 2
     }, {
     "id": "n2",
     "label": "And a last one",
     "x": 1,
     "y": 3,
     "size": 1
     }],
     "edges": [{
     "id": "e0",
     "source": "n0",
     "target": "n1"
     }, {
     "id": "e1",
     "source": "n1",
     "target": "n2"
     }, {
     "id": "e2",
     "source": "n2",
     "target": "n0"
     }]
     };
     */



    // Sigma.js code (left-out beacuse layout is clumsy).

    /*sigma.renderers.def = sigma.renderers.canvas;

     s = new sigma({
     graph: mapData,
     container: 'container',
     settings: {
     defaultNodeColor: '#ec5148',
     verbose: true
     }
     });
     console.log(mapData);

     mapData['nodes'].forEach(function(node){
     degrees[node['id']]['degree'] = s.graph.degree(node['id']);
     });
     $('#dump').text(JSON.stringify(degrees));

     s.startForceAtlas2({
     linLogMode: true,
     barnesHutOptimize: true,
     barnesHutThetha: 5.0,
     scalingRatio: 10,
     startingIterations: 100,
     iterationsPerRender: 500
     });

     setTimeout(function(){
     s.stopForceAtlas2();
     },100000);

     var dragListener = new sigma.plugins.dragNodes(s, s.renderers[0]);
     dragListener.bind('startdrag', function(event) {
     console.log(event);
     });*/
});