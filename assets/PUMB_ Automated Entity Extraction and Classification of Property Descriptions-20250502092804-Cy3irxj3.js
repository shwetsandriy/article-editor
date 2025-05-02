const n=`# PUMB: Automated Entity Extraction and Classification of Property Descriptions

**Client**: PUMB (Bank)

  

**Objective**

Enhance operational efficiency by automating the classification and extraction of key entities from property descriptions using generative artificial intelligence.

  

**Solution Overview**

We leverage **Azure AI Foundry** and **Azure OpenAI Service** with **GPT-4** to streamline the processing of unstructured property data. The implemented solution includes the following components:

1. **Entity Extraction (NER)**

GPT-4-based models are used to identify and extract critical entities such as vendor name, equipment model, asset type, and other relevant characteristics.

2. **Classification**

Extracted data is automatically categorized into predefined property classes. This categorization supports efficient downstream processing and improved asset management.

  

**Technologies Used**

*   Azure AI Foundry for prompt engineering and evaluation
*   Azure OpenAI Service with GPT-4 for natural language understanding

  

**Impact**

This AI-driven approach reduces manual processing time, minimizes human error, and provides scalable, accurate, and consistent classification of asset-related data.

  
  

Example descriptions:

![](https://t9015511399.p.clickup-attachments.com/t9015511399/1541b707-6d20-4def-a353-6fa82bb3473e/image.png)

  

Example output:

![](https://t9015511399.p.clickup-attachments.com/t9015511399/ffa6653c-66f3-4545-abf2-3f3d14ef80f1/image.png)`;export{n as default};
