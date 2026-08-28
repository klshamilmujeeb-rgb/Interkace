import re

# 1. Patch assets/core/index.js
with open("assets/core/index.js", "r") as f:
    text = f.read()

# Update FolderCardsSection iframe height to 720px (or 700px) and section style
old_section = """function FolderCardsSection() {  let isMobile = W();  return (0, x.jsx)('section', {    id: 'folder-cards',    'data-section': 'folder-cards',    style: {      width: '100%',      background: V,      overflow: 'hidden',      margin: 0,      padding: isMobile ? '32px 0 40px' : '48px 0 64px',      display: 'flex',      alignItems: 'center',      justifyContent: 'center'    },    children: (0, x.jsx)('div', {      style: {        display: 'flex',        flexDirection: isMobile ? 'column' : 'row',        alignItems: 'center',        justifyContent: 'center',        gap: isMobile ? '32px' : '24px',        width: '100%',        maxWidth: 1280,        margin: '0 auto',        boxSizing: 'border-box'      },      children: [1, 2, 3].map(function(num) {        return (0, x.jsx)('iframe', {          key: 'folder-card-' + num,          src: '/assets/folder-cards/index.html',          title: 'Folder Card ' + num,          scrolling: 'no',          style: {            width: isMobile ? '100%' : '380px',            height: '520px',            border: 'none',            background: 'transparent',            display: 'block',            overflow: 'visible',            flexShrink: 0          }        });      })    })  });}"""

new_section = """function FolderCardsSection() {  let isMobile = W();  return (0, x.jsx)('section', {    id: 'folder-cards',    'data-section': 'folder-cards',    style: {      width: '100%',      background: V,      overflow: 'hidden',      margin: 0,      padding: isMobile ? '32px 0 48px' : '48px 0 64px',      display: 'flex',      alignItems: 'center',      justifyContent: 'center'    },    children: (0, x.jsx)('div', {      style: {        display: 'flex',        flexDirection: isMobile ? 'column' : 'row',        alignItems: 'center',        justifyContent: 'center',        gap: isMobile ? '32px' : '24px',        width: '100%',        maxWidth: 1280,        margin: '0 auto',        boxSizing: 'border-box'      },      children: [1, 2, 3].map(function(num) {        return (0, x.jsx)('iframe', {          key: 'folder-card-' + num,          src: '/assets/folder-cards/index.html',          title: 'Folder Card ' + num,          scrolling: 'no',          style: {            width: isMobile ? '100%' : '380px',            height: '720px',            border: 'none',            background: 'transparent',            display: 'block',            overflow: 'visible',            flexShrink: 0          }        });      })    })  });}"""

if old_section in text:
    text = text.replace(old_section, new_section)
    print("Replaced FolderCardsSection successfully")
else:
    print("Could not find exact old_section string, trying regex replacement")
    pattern = r"function FolderCardsSection\(\)\s*\{.*?\}"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        print("Found FolderCardsSection with regex:")
        print(match.group(0)[:200])

with open("assets/core/index.js", "w") as f:
    f.write(text)

# 2. Patch assets/folder-cards/index.html
with open("assets/folder-cards/index.html", "r") as f:
    html_text = f.read()

old_margin = "margin: 40px auto !important;"
new_margin = "margin: 20px auto !important;"

if old_margin in html_text:
    html_text = html_text.replace(old_margin, new_margin)
    print("Replaced margin in folder-cards/index.html")

with open("assets/folder-cards/index.html", "w") as f:
    f.write(html_text)

