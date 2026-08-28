with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('loop')
if idx != -1:
    print(text[idx-50:idx+50])
else:
    print("Not found loop")
