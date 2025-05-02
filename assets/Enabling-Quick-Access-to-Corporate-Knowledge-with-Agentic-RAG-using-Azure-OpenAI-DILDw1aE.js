const n=`# Enabling Quick Access to Corporate Knowledge with Agentic RAG using Azure OpenAI  

In this case study, we explore how the company leveraged Azure services and the innovative Agents and 'ChatGPT on Your Data' approach, incorporating Agentic Retrieval-Augmented Generation (RAG), to manage and utilize a vast collection of documents effectively and handle user queries. This solution significantly streamlined information retrieval, reducing dependency on support specialists and enhancing their efficiency in addressing requests. 

### Problem

The company has many documents in multiple formats (PDF, Word, Excel) and documentation in external systems (Zendesk, etc.) about the Platform and would like to allow employees & clients to use these documents as a knowledge base (KB). Also, users must generate Powershell scripts and Kusto queries to retrieve data from the Platform.

  


### Solution

Users can quickly access information from the company knowledge base (KB) and receive exact answers to their questions without using extensive search. KB is configurable by administrators and allows users to specify their permissions for data access.

  


![](https://devrain.blob.core.windows.net/cases/case_image_ff12fd06.png)

  


### Features

* The system understands the user's intent and decides which agent will be used to process the request.


* RAG agent retrieves information from company data: [Crafting Technical Specifications for Custom ChatGPT Implementations | Blog | DevRain](https://devrain.com/blog/crafting-technical-specifications-for-custom-chatgpt-implementations). 


* Script generation agent generates Powershell scripts & Kusto queries.


* New documents are automatically processed and stored in the company knowledge base. The sources are the Zendesk knowledge base and tickets, SharePoint Online, and Azure Storage.


* Document processing logic handles tables and images to keep the format and data structure.


* Supported platforms: MS Teams and Web



  


### Technologies & frameworks

* Azure OpenAI


* Semantic Kernel (LLM orchestration)


* LangChain (Agents & LLM orchestration) & LangSmith & Ragas (RAG evaluation)


* Azure AI Search


* [ASP.NET](http://asp.net/)


* Blazor


* Azure AI Document Intelligence


* Bot Framework


* MS Teams SDK


* Microsoft Graph SDK


* ReactJS



  


### Integrations

* Microsoft Entra


* Azure Storage


* SharePoint Online


* Azure OpenAI & OpenAI


* Microsoft Teams


* Zendesk



  


### Solution architecture:

![](https://devrain.blob.core.windows.net/cases/case_image_0b7f06ed.png)

  


  


**Case study:**

<https://devrain.com/case-studies/ai-assistants/enabling-quick-access-to-corporate-knowledge-for-minimizing-support-specialist-dependency>`;export{n as default};
