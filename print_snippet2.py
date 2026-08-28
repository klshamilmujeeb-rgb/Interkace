import re
with open('assets/category-carousel/aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.DBEhRJg0.mjs', 'r') as f:
    text = f.read()
idx = text.find('crumpleStrength')
print(text[idx-50:idx+200])
