import re

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('function Z_(')
if idx != -1:
    end_idx = idx + 8000
    if end_idx > len(text):
        end_idx = len(text)
    print(text[idx:end_idx])
