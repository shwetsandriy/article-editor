# How DevRain’s Legal AI Assistant Helped a US Law Firm  
### Introduction

A US law firm specializing in personal injury cases had a large database of case-related documents. Their daily tasks included:

* Searching for Relevant Cases: Finding cases and documents related to their current work.


* Verifying Legal Responses: Checking if a lawyer’s response to a motion was valid by comparing it with similar past cases.



  


These tasks were time-consuming and required much manual effort, especially for new employees.

  


### Solution

DevRain developed an Agentic Legal AI Assistant to simplify these daily operations:

* Answering Questions: The assistant allows users to ask questions based on the firm’s knowledge base.


* Validating Responses: Referencing existing data checks if the firm’s response is valid for a specific case.


* Collecting Feedback: The assistant gathers user feedback for review by experienced staff to improve its performance.



  


### Challenges We Faced

While working on this project, we tackled several challenges:

* Avoiding AI Mistakes (Hallucinations): We ensured that all answers provided by the assistant were accurate and based on existing data, preventing any made-up information.


* Using Legal Terms Correctly: We made sure the assistant used all legal terminology accurately to maintain professionalism and correctness.


* Recognizing Document Types: The assistant was trained to identify documents, such as motions and motion responses, to provide appropriate assistance.


* Improving Response Quality: We continuously evaluated the assistant’s logic to enhance the quality of its responses over time.



  


### Evaluation Process

Evaluating AI applications is essential for ongoing improvement. We used Ragas evaluation framework to:

* Run Constant Evaluations: We tested the assistant regularly using a set data set.


* Collect Metrics: Gathered data on each version of the assistant to see how changes affected performance.


* Inform Future Improvements: Used the collected data to make informed decisions on enhancing the assistant further.



  


### Conclusion

The Legal AI Assistant developed by DevRain significantly simplified the law firm’s daily operations. It reduced the time and manual effort required for searching documents and verifying legal responses.

  


### Technologies & frameworks

The solution is based on the agentic RAG approach.

  


* Azure OpenAI


* LangChain (Agents & LLM orchestration) & Ragas (RAG evaluation)


* Azure AI Search


* [ASP.NET](http://asp.net/)


* Blazor


* Azure AI Document Intelligence



  


### Integrations

* Microsoft Entra


* Azure Storage


* SharePoint Online


* Azure OpenAI