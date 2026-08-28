with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('me();function he(e)')
if idx != -1:
    print(text[idx-500:idx+50])
else:
    print("Not found")
