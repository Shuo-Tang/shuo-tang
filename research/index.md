---
title: Research
nav:
  order: 1
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

This space features my completed projects and publications. If any catch your interest, don't hesitate to reach out.  
{%
  include icon.html
  icon="fa-brands fa-github"
%}
Click the featured images to navigate to the corresponding repositories/branches for details.  
{%
  include icon.html
  icon="fa-solid fa-book"
%}
My publications are also listed at the end of each project.

{% include section.html %}

## Direct Position Estimation 
Direct Position Estimation (DPE) is a high-sensitivity receiver design, particularly effective in GNSS applications. Unlike traditional methods, the DPE algorithm solves for PVT directly from raw satellite signals, withou estimating intermediate quantities, e.g. pseudorange and carrier phase.  
Our initial and "naive" idea is that traditional positioning techniques developed over past decades can also enhance the existing DPE approach.  

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

{%
  include feature.html
  image="images/PDPE.png"
  link="https://github.com/Shuo-Tang/direct_position_estimation/tree/main/precise_DPE"
  title="Precise DPE"
  text="PDPE is an extension of DPE by leveraging the carrier phase information of the reveived signal to achieve high-precision positioning and keep the high-sensitivity property."
  flip=true
%}

{%
  include feature.html
  image="images/RMSE_DME.png"
  link="https://github.com/Shuo-Tang/direct_position_estimation/tree/main/robust_interference_mitigation"
  title="RIM DPE"
  text="RIM refers to robust interference mitigation. RDPE utilizes Zero Memory Non-Linearity (ZMNL) filters, such as estimation based on Huber's non-linearity, to improve interference tolerance."
  flip=true
%}

{%
  include feature.html
  image="images/pos_error_Car_Urban_adjusted.png"
  link="https://github.com/Shuo-Tang/direct_position_estimation/tree/main/multipath"
  title="Multipath Mitigation Analysis"
  text="DPE itself has the nature of mitigating the effect of multipath by fusing the information of each satellite at an earlier stage. We demonstartes this ability by plotting multipath error evenlope and simulating in LMSCM (Land Mobile Satellite Channel Model) from DLR (German Aerospace Center)."
  flip=true
%}

{%
  include feature.html
  image="images/DPE_vs_SD.png"
  link="https://github.com/Shuo-Tang/direct_position_estimation/tree/main/SD_DPE"
  title="SD-DPE"
  text="Single difference DPE employs the DGPS (Differential GPS) technique in DPE context. The signal received at the reference receiver, or reconstructed from the base station can be collected to reduce the common error in the rover receiver and enable the precise positioning. "
  flip=true
%}

{% include section.html %}

## All

{% include search-box.html %}

{% include search-info.html %}

{% include list.html 
   data="citations" 
   component="citation"
   filters="tags: DPE"
%}
