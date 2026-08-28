import re
with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('function he(')
if idx != -1:
    print(text[idx-500:idx])
else:
    print("Not found")
