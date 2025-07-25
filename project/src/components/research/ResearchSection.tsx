import React from 'react';
import ResearchCard from './ResearchCard';

const ResearchSection: React.FC = () => {
  const researchPapers = [
    {
      title: "Quantum Kernels for Anomaly Detection in HFT Data",
      authors: "Zhang, J., Patel, R., Sharma, V.",
      abstract: "We propose a novel quantum kernel method that maps high-frequency trading data to a quantum feature space for enhanced anomaly detection. Our approach demonstrates quadratic speedup over classical methods while maintaining high accuracy.",
      tags: ["Quantum Kernels", "HFT", "Fraud Detection"],
      year: 2024,
      imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hybrid Quantum-Classical Autoencoders for Trading Pattern Analysis",
      authors: "Johnson, M., Chen, L., Gupta, A.",
      abstract: "This paper introduces a hybrid quantum-classical autoencoder architecture that compresses trading data patterns into quantum states while using classical deep learning for classification, reducing detection latency by 47%.",
      tags: ["Autoencoder", "Hybrid Models", "Pattern Analysis"],
      year: 2024,
      imageUrl: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Error Mitigation Techniques for Quantum Finance Applications",
      authors: "Rodriguez, S., Kim, H., Patel, N.",
      abstract: "We examine various error mitigation techniques for quantum circuits in financial applications, showing that our M3 approach can reduce quantum noise by up to 68% when deployed on IBM's 127-qubit processor for fraud detection.",
      tags: ["Error Mitigation", "NISQ", "Quantum Finance"],
      year: 2023,
      imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  return (
    <section id="research" className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Latest Research</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore cutting-edge research papers on quantum-classical hybrid approaches for fraud detection in high-frequency trading.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <ResearchCard
              key={index}
              title={paper.title}
              authors={paper.authors}
              abstract={paper.abstract}
              tags={paper.tags}
              year={paper.year}
              imageUrl={paper.imageUrl}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-colors">
            Browse All Research Papers
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;