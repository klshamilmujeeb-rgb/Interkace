import re
with open('assets/core/index.js', 'r') as f:
    text = f.read()
idx = text.find('logoMarquee 25s')
print(text[idx-150:idx+350])
