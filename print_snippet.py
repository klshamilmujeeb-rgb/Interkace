import re
with open('assets/category-carousel/script_main.B05FQ6Ai.mjs', 'r') as f:
    text = f.read()
idx = text.find('crumpleStrength')
print(text[idx-50:idx+200])
