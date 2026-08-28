with open('assets/category-carousel/shared-lib.BrPurwek.mjs', 'r') as f:
    text = f.read()

idx = text.find('let{W:n,H:r}=F,i=38*Math.PI/180,a=12*Math.tan(i/2)/r,o=1/a,s=p===`px`?g:g/100*n,c=m?s:p===`px`?_:_/100*r,l=s*a/2,d=[')
if idx != -1:
    print(text[idx:idx+400])
else:
    print("Not found")
