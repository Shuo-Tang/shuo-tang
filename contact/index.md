---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Feel free to contact me via email or any platform, if you are interesting in my projects!

{%
  include button.html
  type="email"
  text="tang.shu@northeastren.edu"
  link="tang.shu@northeastren.edu"
%}
{%
  include button.html
  type="email"
  text="ts0231@yeah.net"
  link="ts0231@yeah.net"
%}
{%
  include button.html
  type="address"
  tooltip="Our beautiful EXP NEU."
  link="https://www.google.com/maps/place/Northeastern+University+EXP/@42.3371238,-71.0897483,1121m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e37bdf9b2a2a1d:0x8e8417debe76b853!8m2!3d42.3371199!4d-71.0871734!16s%2Fg%2F11t15g69nr?entry=ttu"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}