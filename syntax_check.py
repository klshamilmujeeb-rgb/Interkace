with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('c=m?s:p===`px`?_:_/100*r')
if idx != -1:
    print(text[idx:idx+200])
else:
    print("Not found")
