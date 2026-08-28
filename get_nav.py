with open("assets/core/index.js", "r") as f:
    text = f.read()

start = text.find("children:i?(0,x.jsxs)(`div`,{style:{position:`relative`,display:`flex`,alignItems:`center`")
end = text.find(":(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,background:`#F0F0F0`,borderRadius:55", start)
print(text[start:end])
