with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()
idx = text.find('V.goToIndex')
if idx != -1:
    print(text[idx-200:idx+200])
else:
    print("Not found")
