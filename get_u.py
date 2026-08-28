import re
with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('p===`px`?(A=g,ee=m?g:_):(A=g/100*c,ee=m?A:_/100*u)')
print(text[idx:idx+150])
