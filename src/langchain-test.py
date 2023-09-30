from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
import os

load_dotenv("/home/slejman/hackyeah_2023/src/keyes.env")

question = "What is the freezing point of water?"

template = """Question: {question}

Answer: Let's think step by step."""

prompt = PromptTemplate(template=template, input_variables=["question"])
repo_id = "google/flan-t5-xxl"
llm = HuggingFaceHub(
    repo_id=repo_id, model_kwargs={"temperature": 0.3, "max_length": 64},
    huggingfacehub_api_token=os.getenv("huggingfacehub_api_token")
)
llm_chain = LLMChain(prompt=prompt, llm=llm)
print(llm_chain.run(question))

#hf = HuggingFaceHub(repo_id="openlm-research/open_llama_7b_v2", huggingfacehub_api_token="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")
#print(hf.predict("Hi! What are you doing?"))