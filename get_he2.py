with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('let i=he(r);')
if idx != -1:
    print(text[idx-400:idx+150])
else:
    print("Not found")
