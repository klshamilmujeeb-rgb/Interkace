import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

start_phone_mockup = text.find("function renderPhoneMockup()")
if start_phone_mockup != -1:
    end_phone_mockup = text.find("function renderDesktopMockup()", start_phone_mockup)
    phone_mockup_text = text[start_phone_mockup:end_phone_mockup]
    
    phone_mockup_text = phone_mockup_text.replace('maxWidth: "240px",\n              padding: "0 8px"', 'width: "100%",\n              maxWidth: "100%",\n              padding: "0 16px"')
    
    text = text[:start_phone_mockup] + phone_mockup_text + text[end_phone_mockup:]
else:
    print("Could not find renderPhoneMockup")


with open("assets/core/index.js", "w") as f:
    f.write(text)

