with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

count1 = text.count("p===`px`?(A=g,ee=m?g:_):(A=g/100*c,ee=m?A:_/100*u);")
print("count1:", count1)

count2 = text.count("s=p===`px`?g:g/100*n,c=m?s:p===`px`?_:_/100*r,l=s*a/2")
print("count2:", count2)
