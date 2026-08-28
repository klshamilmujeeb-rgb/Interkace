with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('function he(')
if idx != -1:
    print(text[idx:idx+400])
else:
    print("Not found")
