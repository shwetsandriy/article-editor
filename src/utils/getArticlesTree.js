export function getArticlesTree() {
  const files = import.meta.glob('../articles/**/*.md', { as: 'raw' });
  const tree = {};

  Object.keys(files).forEach((fullPath) => {
    const relativePath = fullPath.replace('../articles/', '');
    const parts = relativePath.split('/');
    const fileName = parts.pop().replace('.md', '');
    const friendlyNames = {
      "AI Capabilities in Software-20250424160553": "AI Capabilities in Software",
      "AI-Powered-Billing-Calculation-for-Legal-Case-Documents": "AI-Powered Billing Calculation for Legal Case Documents",
      "Automated-processing-of-legal-documents-for-GDPR-compliance": "Automated processing of legal documents for GDPR compliance",
      "Enabling-Quick-Access-to-Corporate-Knowledge-with-Agentic-RAG-using-Azure-OpenAI": "Enabling Quick Access to Corporate Knowledge with Agentic RAG using Azure OpenAI",
      "Generating-PowerShell-Scripts-with-OpenAI": "Generating PowerShell Scripts with OpenAI",
      "How-DevRain’s-Legal-AI-Assistant-Helped-a-US-Law-Firm": "How DevRain’s Legal AI Assistant Helped a US Law Firm",
      "Intelligent-Assistant-for-Revenue-Management-platform": "Intelligent Assistant for Revenue Management platform ",
      "Kernel-Internal-IT-Support-with-Azure-OpenAI": "Kernel: Internal IT Support with Azure OpenAI",
      "AI-powered projects-20250424151817": "AI-powered projects",
      "Cloud and .NET projects-20250424160032": "Cloud and .NET projects"
    };

    let current = tree;
    for (const folder of parts) {
      if (!current[folder]) current[folder] = {};
      current = current[folder];
    }

    if (!current.files) current.files = [];
    current.files.push({
      name: fileName,
      path: relativePath,
      displayName: friendlyNames[fileName] || fileName
    });
  });

  return tree;
}
