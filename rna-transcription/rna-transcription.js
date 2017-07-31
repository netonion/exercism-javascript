function DnaTranscriber() {}

DnaTranscriber.mappings = {C: 'G', G: 'C', A: 'U', T: 'A'};
DnaTranscriber.prototype.toRna = rna =>
  rna.split("").map(codon => {
    dna = DnaTranscriber.mappings[codon];
    if (!dna) throw new Error('Invalid input');
    return dna;
  }).join("");

module.exports = DnaTranscriber;
