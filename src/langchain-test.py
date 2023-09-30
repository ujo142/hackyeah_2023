from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate, ChatPromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
from langchain.schema import HumanMessage, AIMessage
import os
from langchain.schema import BaseOutputParser

class CommaSeparatedListOutputParser(BaseOutputParser):
    """Parse the output of an LLM call to a comma-separated list."""


    def parse(self, text: str):
        """Parse the output of an LLM call."""
        return text.strip().split(", ")

load_dotenv("/home/slejman/hackyeah_2023/src/keyes.env")


question = "I want to know the best universities in Poland?"

template = """Based on the message determine whether you talk to a mother or to a student
Message: {question}

Answer: """

template = """You are an employment advisor. Based on the message ask for details extensively like you would ask a mother trying to help her son
Message: {question}

Answer: """

prompt = PromptTemplate(template=template, input_variables=["question"])

repo_id = "google/flan-t5-xxl"
llm = HuggingFaceHub(
    repo_id=repo_id, model_kwargs={"temperature": 0.2, "max_length": 64},
    huggingfacehub_api_token=os.getenv("huggingfacehub_api_token")
)
llm_chain = LLMChain(prompt=prompt, llm=llm)
print(llm_chain.run(question))
#print(llm.predict_messages(messages).content)


#hf = HuggingFaceHub(repo_id="openlm-research/open_llama_7b_v2", huggingfacehub_api_token="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")
#print(hf.predict("Hi! What are you doing?"))