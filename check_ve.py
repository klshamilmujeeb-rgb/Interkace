import re
with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('function ve(')
if idx != -1:
    print(text[idx:idx+150])
