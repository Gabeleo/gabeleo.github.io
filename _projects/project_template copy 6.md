---
layout: page #layout of the page from _layouts (if rosie dont worry about this)
title: ONE #title of the project
img: assets/img/portfolio_images/9_.jpeg #image path. i.e assets/img/portfolio_images/1_.jpg
importance: 3 #changes order in which is it appeared in the year its displayed in
category: 2023 #year number or year range. i.e 2023 or 2022-2023
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% assign img_path = page.img%}
        {% include figure.html path=img_path  class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ONE. 03/02/2023. 5" X 7". OIL ON CANVAS. 
</div>
