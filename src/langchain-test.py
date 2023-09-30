from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate, ChatPromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
from langchain.schema import HumanMessage
import os
from langchain.schema import BaseOutputParser

class CommaSeparatedListOutputParser(BaseOutputParser):
    """Parse the output of an LLM call to a comma-separated list."""


    def parse(self, text: str):
        """Parse the output of an LLM call."""
        return text.strip().split(", ")

load_dotenv("/home/slejman/hackyeah_2023/src/keyes.env")

text = "What would be a good company name for a company that makes colorful socks?"
messages = [HumanMessage(content=text)]

question = "I want to know the best universities in Poland?"

template = """Based on the message determine whether you talk to a mother or to a student
Message: {question}

Answer: """

prompt = PromptTemplate(template=template, input_variables=["question"])
repo_id = "google/flan-t5-xxl"
llm = HuggingFaceHub(
    repo_id=repo_id, model_kwargs={"temperature": 0.3, "max_length": 64},
    huggingfacehub_api_token=os.getenv("huggingfacehub_api_token")
)
llm_chain = LLMChain(prompt=prompt, llm=llm)
print(llm_chain.run(question))
print(llm.predict_messages(messages).content)


#hf = HuggingFaceHub(repo_id="openlm-research/open_llama_7b_v2", huggingfacehub_api_token="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")
#print(hf.predict("Hi! What are you doing?"))