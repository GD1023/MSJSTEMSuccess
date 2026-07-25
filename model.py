
import os
from langchain_groq import ChatGroq
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv

load_dotenv()

CURRICULUM_DIR = os.path.join(os.path.dirname(__file__), "Curriculum")

loader = PyPDFDirectoryLoader(CURRICULUM_DIR, glob="**/*.pdf", recursive=True)
documents = loader.load()

print(f"Loaded {len(documents)} pages from PDFs in {CURRICULUM_DIR}")
