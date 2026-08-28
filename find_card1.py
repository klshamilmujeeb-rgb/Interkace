import os
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.js') or f.endswith('.jsx') or f.endswith('.mjs'):
            try:
                with open(os.path.join(root, f), 'r') as file:
                    if 'Card 1' in file.read() or 'card 1' in file.read() or 'Card 5' in file.read() or 'card 5' in file.read():
                        print(f"Found in {os.path.join(root, f)}")
            except:
                pass
