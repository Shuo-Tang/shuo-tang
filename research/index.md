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

{%
  include citation.html
  lookup="doi:10.1109/MSP.2017.2718040"
%}
{%
  include citation.html
  lookup="doi:10.1109/PLANS53410.2023.10140046"
%}
{%
  include citation.html
  lookup="10.1109/TAES.2023.3312350"
%}

{% include section.html %}
## Physics-informed learning
Augmented physics-based model (APBM) is a hybrid physics-based data-driven model, which is capable of learning complex state dynamics while maintaining some level of model interpretability by keeping the physics knowledge.
{%
  include feature.html
  image="images/apbm_lorenz.png"
  link="https://github.com/Shuo-Tang/APBM_higher_order"
  title="APBM"
  text="We consider APBM as a physics-based model plus a nerual network, e.g. Multilayer perceptron. Due to the nonlinearity of the model, the Cubature Kalman filter is usually implemented to performing the state estimate and learning process. Besides, we extend the APBM to the high-order Markovity and noise identification problems."
  flip=false
%} 

{%
  include citation.html
  lookup="doi:10.23919/FUSION49751.2022.9841291"
%}

{% include section.html %}
## Cognitive Radar
Cognitive radars refer to the radars that can adaptively change its parameters, e.g. the location of the radar, the waveform, and power of the transmitting signals, to achieve better tracking performance in a closed loop through optimization principles. 
This capability of responding to the dynamic target through waveform agility also enables the detection of the cognitive behavior of the radar from the target side.

{%
  include feature.html
  image="images/cog_radar_id.png"
  link="https://github.com/Shuo-Tang/cognitive_radar_identification"
  title="Cognitive Radar Identification"
  text="A beamformer is designed to passively perceive the behavior of the radar. TO identify the cognitive radar, mutual Information (with Anderson–Darling test) and causality inference (more robust) are employed to make the decision."
  flip=true
%}  


{% include search-box.html %}

{% include search-info.html %}


