import os, re
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.js') or f.endswith('.mjs') or f.endswith('.html') or f.endswith('.css'):
            try:
                with open(os.path.join(root, f), 'r') as file:
                    content = file.read()
                    if 'draggable-carousel' in content or 'fluid-carousel' in content or 'loop' in content:
                        print(f"Found in {os.path.join(root, f)}")
            except:
                pass
