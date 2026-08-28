import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

# Replace height: '520px' with height: '720px' inside FolderCardsSection
pattern = r"(function FolderCardsSection\(\)\s*\{[\s\S]*?height:\s*')520px('[\s\S]*?\})"

def replacer(match):
    return match.group(1) + "720px" + match.group(2)

new_text, count = re.subn(pattern, replacer, text)

print(f"Replaced count: {count}")

with open("assets/core/index.js", "w") as f:
    f.write(new_text)

