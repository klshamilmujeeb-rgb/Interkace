import re

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('let be=0,xe=0,Se=0,Ce=0,we=0,Te=0,Ee=!1')
if idx != -1:
    end_idx = idx + 4000
    if end_idx > len(text):
        end_idx = len(text)
    print(text[idx:end_idx])
