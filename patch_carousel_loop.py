import re

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

# 1. Update pointermove clamping
old_pointermove = "o<0?o*=.35:o>ge-1&&(o=ge-1+(o-(ge-1))*.35),V.scrollPosition=o"
new_pointermove = "V.scrollPosition=o"
text = text.replace(old_pointermove, new_pointermove)

# 2. Update pointerup clamping
old_pointerup = "let t=V.scrollPosition+Te*130,r=Math.max(0,Math.min(ge-1,Math.round(t)));"
new_pointerup = "let t=V.scrollPosition+Te*130,r=Math.round(t);"
text = text.replace(old_pointerup, new_pointerup)

# 3. Update pointercancel clamping
old_pointercancel = "V.targetScroll=Math.max(0,Math.min(ge-1,Math.round(V.scrollPosition)))"
new_pointercancel = "V.targetScroll=Math.round(V.scrollPosition)"
text = text.replace(old_pointercancel, new_pointercancel)

# 4. Update Ne() render loop position calculation
old_render = "let n=_e[t],r=t-V.scrollPosition,i=he(r);"
new_render = "let n=_e[t],r=(t-V.scrollPosition)%ge;if(r>ge/2)r-=ge;if(r<-ge/2)r+=ge;let i=he(r);"
text = text.replace(old_render, new_render)

# 5. Update ye() function (the pagination dots)
old_ye = "function ye(){let t=Math.round(V.targetScroll);"
new_ye = "function ye(){let t=((Math.round(V.targetScroll)%ge)+ge)%ge;"
text = text.replace(old_ye, new_ye)

# 6. Make ve() relative so clicking dots goes the shortest path
old_ve = "function ve(e){let max=ge;let target=((Math.round(e)%max)+max)%max;V.targetScroll=target;ye();}"
new_ve = "function ve(e){let max=ge;let cur=V.targetScroll;let diff=((e-cur)%max+max*1.5)%max-max/2;V.targetScroll=cur+diff;ye();}"
text = text.replace(old_ve, new_ve)

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'w') as f:
    f.write(text)

print("Infinite scroll patched!")
