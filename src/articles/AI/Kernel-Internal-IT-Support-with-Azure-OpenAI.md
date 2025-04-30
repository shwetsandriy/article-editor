# Kernel: Internal IT Support with Azure OpenAI  
**Company Background**

[Kernel](https://www.kernel.ua/) is the world’s leading producer and exporter of sunflower oil, the largest producer and exporter of grains in Ukraine, and a major supplier of agricultural products from the Black Sea region to international markets. The company accounts for about 8% of the world’s sunflower oil exports. Kernel delivers its products to over 70 countries. Since November 2007, the Company’s shares have been traded on the Warsaw Stock Exchange (WSE).

  


**Challenge**

Kernel aimed to improve the customer support experience for their employees by providing faster, more accurate responses to inquiries.

  


**Solution**

DevRain implemented an AI-based system enhanced with agentic Retrieval Augmented Generation (RAG) to leverage their existing knowledge bases.

  


![](https://t9015511399.p.clickup-attachments.com/t9015511399/eba452fc-5aa7-48f6-970c-5cdcd126a480/image.png)

  


**Key Components:**

1. Azure OpenAI: Advanced language model for natural conversation

2. Agentic RAG: Technique to enhance AI responses with the retrieved information

3. Data Sources:

 - Confluence: company internal knowledge base

 - Jira: issue tracking and project management

 - SharePoint Online: internal documents - technical manuals and guides

  


**Implementation**

1. Data Indexing: content from Confluence, Jira, and documents was processed and indexed to AI knowledge base. Documents (PDF, Word etc) are processed with Azure Document Intelligence to retrieve content.

2. RAG Integration: the system was set up to retrieve relevant information from AI knowledge base and use Azure OpenAI to answer user queries. The system provides citations so users can validate the correctness of the answers and check details if needed.

3. Real-time updates from Jira, Confluence, and SharePoint are being processed, and AI knowledge base was updated. 

  


JIRA and Confluence: REST API is used. To receive real-time updates - Webhooks.

SharePoint Online: Microsoft Graph API is used. To receive real-time updates - SharePoint Online Webhooks.

  


**Conclusion**

By combining Azure OpenAI with agentic RAG and leveraging existing knowledge bases, Kernel improved its customer support efficiency and effectiveness, improved employee and customer satisfaction, and reduced costs.

  


**References**

<https://devrain.com/blog/crafting-technical-specifications-for-custom-chatgpt-implementations>

<https://devrain.com/blog/navigating-the-rag-landscape-key-challenges-in-ai-powered-information-retrieval>

  


**Relative cases**

Enabling Quick Access to Corporate Knowledge with OpenAI:<https://doc.clickup.com/9015511399/p/h/8cnvjb7-995/06888024c4681b4>