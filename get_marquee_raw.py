with open('assets/core/index.js', 'r') as f:
    text = f.read()
idx = text.find('logoMarquee 25s')
print(repr(text[idx-50:idx+350]))
