
/* Institutions ***************************************************************/

$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=cunef]'        ).attr('href','https://www.cunef.edu/en/');
$('a[id=airef]'        ).attr('href','https://www.airef.es/en/');
$('a[id=ucm]'          ).attr('href','https://economicasyempresariales.ucm.es');

/* People *********************************************************************/

$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=anton]'        ).attr('href','https://anakov.github.io/');
$('a[id=josep]'        ).attr('href','https://www.cemfi.es/~pijoan/Welcome.html');
$('a[id=nezih]'        ).attr('href','https://www.cemfi.es/~guner/');
$('a[id=jc]'           ).attr('href','https://jcruizgarcia.com/');
$('a[id=javi]'         ).attr('href','https://sites.google.com/view/javierlopezsegovia/home?authuser=0');
$('a[id=enriquemoral]' ).attr('href','https://moralbenito.weebly.com/');
$('a[id=tonibraun]'    ).attr('href','https://sites.google.com/view/rantonbraun/home');
$('a[id=juanfranjim]'  ).attr('href','https://www.bde.es/investigador/en/menu/people/research_staff_a/Jimeno_Serrano__Juan_Francisco.html');
$('a[id=davidlopez]'   ).attr('href','https://sites.google.com/site/davidlopezrodriguezphd/');
$('a[id=almunia]'      ).attr('href','https://malmunia.github.io/');

/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=anav]'      ).attr('target','_self');
$('a[class=anavs]'     ).attr('target','_self');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=top]'       ).attr('target','_self');
$('a[class=down]'      ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');
$('a[class=toccv]'     ).attr('target','_blank');
$('a[class=title]'     ).attr('target','_self');

/* Show/Hide functions *********************************************************/

$(document).on("click", "h1.more", function(event){
  event.preventDefault();
  $(this).attr('class', 'less');
});

$(document).on("click", "h1.less", function(event){
  event.preventDefault();
  $(this).attr('class', 'more');
});

$(document).on("click", "a.more", function(event){
  event.preventDefault();
  $(this).attr('class', 'less');
});

$(document).on("click", "a.less", function(event){
  event.preventDefault();
  $(this).attr('class', 'more');
});

function showhide(xx) {
  var x = document.getElementById(xx)
  if (x.style.display === "none") {
    $(x).slideDown('slow');
  } else {
    $(x).slideUp('slow');
  }
}

/******************************************************************************/
