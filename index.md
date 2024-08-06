---
---

# Welcome to my research hub

{% capture content %}
  {%
  include figure.html
  image="images/photo_with_yellow.jpg"
  width="400px"
  %}
{% endcapture %}

{%
  include float.html
  content=content
  flip=true
%}

Hi, I am Shuo Tang, your possible next friend who is taking a scenic route through academia! I am currently a Ph.D. candidate in Electrical and Computer Engineering at Northeastren University, Boston, MA, USA. 

I started off with a BS degree in Vehicle Engineering from China Agricultural University, where I get obsessed with engineering and trouble-shooting. I came to the Boston in 2018 and got my Master degree in Mechanical Engineering at Northeastern University. I love this city, except for the long winter which is just nature’s way of saying, "Stay inside and study or play PC games." Now I am a Ph.D. student working with Prof. Pau Closas at NEU. I am playing with satellites, tracking and navigation everyday. My research foucuses on GNSS signal processing, sensor fusion, computational statistics and physics-informed learning.

When I’m not buried in code or lost in research papers, I like to go to the gym, play basketball and tennis. Don't forget about PC games! Welcome come to my research hub! I hope my research are interesting to you and may even bring inspirations. If you’re into living life to the fullest, we’re already on the same wavelength.

{% include float.html clear=true %}

{% include section.html %}

## Research Highlights

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
