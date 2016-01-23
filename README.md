## niche

### Project Structure

Main project is in ```knockout/```. In that work is currently done on ```cobrademo.html```, but its only for testing right now. Nothing is fixed, this project is liable to change completely.

#### V.5.3 - Biological Networks: from Micro to Macro niche 
#### Project Abstract

The COnstraints Based Reconstruction and Analysis (COBRA) approach to systems biology accepts the fact that we do not possess sufficiently detailed parameter data to precisely model, in the biophysical sense, an organism at the genome scale. The COBRA approach focuses on employing physicochemical constraints to define the set of feasible states for a biological network in a given condition based on current knowledge. These constraints include compartmentalization, mass conservation, molecular crowding, and thermodynamic directionality. More recently, transcriptome data have been used to reduce the size of the set of computed feasible states. Although COBRA methods may not provide a unique solution, they provide a reduced set of solutions that may be used to guide biological hypothesis development.

BiGG is a knowledgebase of Biochemically, Genetically and Genomically structured genome-scale metabolic network reconstructions. BiGG integrates more than 70 published genome-scale metabolic networks into a single database with a set of standardized identifiers called BiGG IDs. Gene in the BiGG models are mapped to NCBI genome annotations, and metabolites are linked to many external databases (KEGG, PubChem, and many more).

The BiGG database provides COBRA models for many known organism which consists of mapping of many genes, and their associated reactions and metabolites. A COBRA model defines a metabolic network of an organism for simulating it in real life in terms of reactants and products. It provides a flow of metabolites and the rate bound for each reaction. 

This project aims at providing a tool for visualizing and simulating an organism as a metabolic network built from the genes, their corresponding reactions and consisting metabolites from the COBRA model. A major fundamental assumptions is that every organism tries to optimize an important metabolic reaction, stopping of which will cause the organism to die. We calculate the susceptibility of a reaction causing the organism to die by forming a linear programming problem from the given constraints. We also aim to allow the user to interactively modify a reaction dynamically and see its real time effect on the organism.

This project will help in studying the an organism as a metabolic network of genes and reactions. It will help in interactively finding out if a reaction or a metabolite or the gene responsible for it is essential for the organism's survival. This project mainly has educational uses but can also be used for researchers for simulating an organism as a metabolic network.

Namaste.

References:
    • BiGG Models - http://bigg.ucsd.edu/
    • CoBRA Methods - http://cobramethods.wikidot.com/


