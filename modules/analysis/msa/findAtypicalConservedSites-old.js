


function findAtypicalConservedSites(refsequence, alignment, feature) {

	// set possible amino acids for detecting bias
	//var twofoldAAs = [   ];
	//var threefoldAAs = [   ];
	//var fourfoldAAs = [   ];
	//var sixfoldAAs = [   ];

    // Get all references
	var referencesResult = glue.command(["list","reference"]);
	//glue.log("INFO", "RESULT WAS ", referencesResult);
	var listResult = referencesResult["listResult"];
	var referencesList = listResult["row"];
	//glue.log("INFO", "RESULT WAS ", referencesList);

    
    // Iterate through the reference sequences
	codonCompositionResults = {}
	_.each(referencesList, function(refObj) {

		//glue.log("INFO", "RESULT WAS ", refObj);
		var refseqResults = {};
		var referenceProperties = refObj["value"];
		var referenceName = referenceProperties[0];
		//glue.log("INFO", "Reference name result was:", referenceName);
		
		// list all features annotated in this reference 
		// GLUE COMMAND: reference [referenceName] list feature-location
		glue.inMode("/reference/"+referenceName, function() {

			var featuresResult = glue.tableToObjects(glue.command(["list", "feature-location"]));
			//glue.log("INFO", "RESULT WAS ", featuresResult);
			 
			// iterate through features
			_.each(featuresResult, function(featureObj) {

			   //glue.log("INFO", "RESULT WAS ", featureObj);
			   
			   var featureResults = {};
		   
			   // get amino acid sequence
			   var featureName = featureObj["feature.name"];
			   glue.log("INFO", "Feature name result was:", featureName);
			   
			   // use amino acid command to get data for this coding feature
			   
			   
			   // for each coding sequence get the alignment
			   
			    // iterate through each codon site and do codon frequency query
   

				// to get all conserved aa sites in alignment
				// check if its an AA that can reveal a bias (two-, three-, four-, sixfold)
				// if yes then add to list of sites to check

				   
			});   

			// store reference result
			codonCompositionResults[referenceName] = refseqResults;
		
		});   
	
	});


    
    // for all sites to check, get alignment columns
    // check *codon* conservation in all conserved aa alignment columns in this feature
    
    // compile list of conserved codons
    
    // check for atypical codons 
    

	// export alignment from GLUE
	glue.inMode("module/fastaAlignmentExporter", function(){	
	var sequences = glue.command(["export",alignment,"-r",refsequence,"-f",feature,"-a","-p"]);
	var list = sequences.nucleotideFasta.sequences;
	
	// loop through each sequence in the alignment to find reference sequence
	_.each(list, function(seq){			
		if (seq.id == refname ) {
			ref_seq = seq.sequence;
		}	
	});
			
    // loop through each sequence in the alignment and compare with ref
	_.each(list, function(seq){
		var position = 1;
		for (var i=0; i < seq.sequence.length; i+=3) {
			//var key = "codon_" + position;
			var key = position;
			
			var seq_codon = seq.sequence.charAt(i) +seq.sequence.charAt(i+1) +seq.sequence.charAt(i+2);
			var ref_codon = ref_seq.charAt(i) + ref_seq.charAt(i+1) + ref_seq.charAt(i+3);
		
			if (seq_codon != ref_codon) {				
				
				glue.logInfo(key + "\t" + seq_codon + "\t" + ref_codon);
				
				var seq_aa = aa_codons[seq_codon];
				var ref_aa = aa_codons[ref_codon];

				glue.logInfo(seq.id + "\t" + ref_aa + "\t" + seq_aa);
							
				var positionFreqs = codon_counts[key];
				if (positionFreqs == null) {
					positionFreqs = {S:0, NS:0, T:0};
					codon_counts[key] = positionFreqs;
				}
				opt = ""
				if (seq_aa != ref_aa){
					//increment counter for NS
					opt = "NS";
				} else if (seq_aa == ref_aa) {
					//increment counter for S
					opt = "S";
				}
				positionFreqs[opt]++;
				positionFreqs["T"]++;
			}

			position++;
		}
	});

    //output = codon | synonymous changes  | non-synonymous changes  | total changes
    //glue.logInfo("codon_counts", codon_counts);	

});
