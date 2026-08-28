import re

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

# 1. Update u() variables A and ee
old_A_ee = "p===`px`?(A=g,ee=m?g:_):(A=g/100*c,ee=m?A:_/100*u);"
new_A_ee = "p===`px`?(A=g,ee=m?g:_):(A=g/100*c,ee=m?A:_/100*u);let isMob = typeof window !== 'undefined' && window.innerWidth <= 768;if(isMob){A=window.innerWidth-64;ee=A;}"
text = text.replace(old_A_ee, new_A_ee)

# 2. Update fallback variables s and c
old_s_c = "s=p===`px`?g:g/100*n,c=m?s:p===`px`?_:_/100*r,l=s*a/2"
new_s_c = "s=p===`px`?g:g/100*n,c=m?s:p===`px`?_:_/100*r;let isMob2 = typeof window !== 'undefined' && window.innerWidth <= 768;if(isMob2){s=window.innerWidth-64;c=s;}let l=s*a/2"
text = text.replace(old_s_c, new_s_c)

with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'w') as f:
    f.write(text)

print("Mobile carousel patched!")
