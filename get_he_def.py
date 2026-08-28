import re
with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

# search for he = 
matches = re.finditer(r'he\s*=\s*\(.*?\)\s*=>', text)
for m in matches:
    start = max(0, m.start() - 50)
    end = min(len(text), m.end() + 200)
    print("MATCH:", text[start:end])
