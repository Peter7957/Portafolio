const btnInicio = $("#btnInicio");
const btnSobreMi = $("#btnSobreMi");
const btnContactame = $("#btnContactame");
const btnTecnologias = $("#btnTecnologias");
const btnProyectos = $("#btnProyectos");
const btnTecnologiasHide = $("#btnTecnologiasHide");
const btnProyectosHide = $("#btnProyectosHide");

const btnSubmit = $("#btnSubmit");

const sectionInicio = $("#sectionInicio");
const asideInicio = $("#asideInicio");

const sectionSobreMi = $("#sectionSobreMi");
const asideSobreMi = $("#asideSobreMi");

const sectionContactame = $("#sectionContactame");
const asideContactame = $("#asideContactame");

const sectionTecnologia = $("#sectionTecnologia");
const sectionProyectos = $("#sectionProyectos");

const sectionTecnologiaHide = $("#sectionTecnologiaHide");
const sectionProyectosHide = $("#sectionProyectosHide");

const form = $("#form");


$(document).ready(function () {

 btnInicio.click(function (e) { 
    sectionInicio.css('display', 'block');
    sectionSobreMi.css('display', 'none');
    sectionContactame.css('display', 'none');
    sectionTecnologiaHide.css('display', 'none');
    sectionProyectosHide.css('display', 'none');

    asideInicio.css('display', 'block');
    asideSobreMi.css('display', 'none');
    asideContactame.css('display', 'none');
 });

  btnSobreMi.click(function (e) { 
    sectionInicio.css('display', 'none');
    sectionSobreMi.css('display', 'block');
    sectionContactame.css('display', 'none');
    sectionTecnologiaHide.css('display', 'none');
    sectionProyectosHide.css('display', 'none');

    asideInicio.css('display', 'none');
    asideSobreMi.css('display', 'block');
    asideContactame.css('display', 'none');
  });

  btnContactame.click(function (e) { 
    sectionInicio.css('display', 'none');
    sectionSobreMi.css('display', 'none');
    sectionContactame.css('display', 'block');
    sectionTecnologiaHide.css('display', 'none');
    sectionProyectosHide.css('display', 'none');

    asideInicio.css('display', 'none');
    asideSobreMi.css('display', 'none');
    asideContactame.css('display', 'block');
    
  });

  btnProyectosHide.click(function (e) { 
    sectionInicio.css('display', 'none');
    sectionSobreMi.css('display', 'none');
    sectionContactame.css('display', 'none');
    sectionTecnologiaHide.css('display', 'none');
    sectionProyectosHide.css('display', 'flex');

    asideInicio.css('display', 'none');
    asideSobreMi.css('display', 'none');
    asideContactame.css('display', 'none');
    
  });

  btnTecnologiasHide.click(function (e) { 
    sectionInicio.css('display', 'none');
    sectionSobreMi.css('display', 'none');
    sectionContactame.css('display', 'none');
    sectionTecnologiaHide.css('display', 'flex');
    sectionProyectosHide.css('display', 'none');

    asideInicio.css('display', 'none');
    asideSobreMi.css('display', 'none');
    asideContactame.css('display', 'none');
    
  });



  btnProyectos.click(function (e) { 
    sectionTecnologia.css('display', 'none');
    sectionProyectos.css('display', 'block');
  });

  btnTecnologias.click(function (e) { 
    sectionProyectos.css('display', 'none');
    sectionTecnologia.css('display', 'block');
  });

  form.submit(function (e) { 
    e.preventDefault();
    form[0].reset();
    console.log("se envio algo");
    
  });


});

// sectionInicio.css('display', 'none');
//     sectionSobreMi.css('display', 'none');
//     sectionContactame.css('display', 'block');

// const btnSubmit = document.getElementById("btnSubmit");
// const form = document.getElementById("form");
// const secContactame = document.getElementById("sectionContactame");
// const secSobreMi = document.getElementById("sectionSobreMi");
// const secInicio = document.getElementById("sectionInicio");

// btnSubmit.addEventListener("submit", function(e){
//   e.preventDefault();
//   console.log("hola");
  

//   secContactame.setAttribute("style", "display:block");
//   secSobreMi.setAttribute("style", "display:none");
//   sectionInicio.setAttribute("style", "display:none");

//   form.reset();

// })