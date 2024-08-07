---
title: Research
nav:
  order: 1
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

This space features my completed projects and publications. If any catch your interest, don't hesitate to reach out.

{% include section.html %}

## Direct Position Estimation 
Direct Position Estimation (DPE) is a high-sensitivity receiver design, particularly effective in GNSS applications. Unlike traditional methods, the DPE algorithm solves for PVT directly from raw satellite signals, withou estimating intermediate quantities, e.g. pseudorange and carrier phase.  
Our initial and "naive" idea is that traditional positioning techniques developed over past decades can also enhance the existing DPE approach.
{%
  include icon.html
  icon="fa-solid fa-github"
%}

{%
  include button.html
  type="github"
  link="Shuo-Tang/direct_position_estimation"
  icon="fa-brands fa-github"
  text="DPE Repository on GitHub"
  tooltip="DPE approaches on Github"
  flip=true
  style="bare"
 %}

{%
  include feature.html
  image="images/bound_vs_rmse.png"
  link="https://github.com/Shuo-Tang/direct_position_estimation/tree/main/SD_DPE"
  title="Standard DPE"
  text="DPE in the GNSS context was first proposed by Prof. Pau Closas. The standard DPE approach demonstrates that the DPE outperforms the traditional two-step approach in term of position precision."
  flip=true
%}

{% include section.html %}

## All

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
