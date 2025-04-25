# Generating PowerShell Scripts with OpenAI

### **Summary**

IT Pro must write custom complex PowerShell scripts to manage companies' infrastructure. OpenAI-powered Copilot generates and validates scripts based on user input. Users can spend 50% less time preparing to use scripts for their needs.

  

### **Problem**

IT Pro must write advanced PowerShell scripts to manage infrastructure (Windows VM or Azure environment). Scripts should follow specific rules; users can't validate them without running on the Production environment.

  

### **Solution**

Copilot helps users to get final validation scripts: bot collects the required information from the user, guides him through the generation process, and uses LLM to generate and validate scripts.

  

![](https://t9015511399.p.clickup-attachments.com/t9015511399/eadd0a34-be5f-4009-9cc5-759921d1c15a/image.png)

  

The GPT4-o model gives the best results for now.

*   LangChain agents approach is used. Each agent is responsible for a specific step: generation, analysis, and correction.
*   Ragas is used to run model evaluations using a test dataset.

  

**Tech stack:**

*   Azure OpenAI
*   Streamlit
*   LangChain

###
