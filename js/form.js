document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form_register");
    const submitBtn = document.getElementById("submit");
  
    //verificar si todos los campos están llenos
    function validarCampos() {
      const inputs = form.querySelectorAll("input[required]");
      let todosLlenos = true;
  
      inputs.forEach(function (input) {
        if (input.value.trim() === "") {
          todosLlenos = false;
        }
      });
  
      return todosLlenos;
    }
  
    //habilitar/deshabilitar el botón de envío según la validación
    function habilitarBoton() {
      if (validarCampos()) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#5e80f8";
        submitBtn.style.cursor = "pointer";
      } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "";
      }
    }
    //verificar la validez de los campos en tiempo real
    form.addEventListener("input", habilitarBoton);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const ghost_register = document.getElementById("ghost_register");
    const ghost_login = document.getElementById("ghost_login");
  
    const container_ghost = document.getElementById("ghost_traslate"); //Contenedor Fantasma
  
    const login_form = document.getElementById("login_form");
    const register_form = document.getElementById("register_form");
  
    ghost_register.addEventListener("click", function () {
      container_ghost.style.transform = "translateX(100%)";
      login_form.style.opacity = "0";
      register_form.style.opacity = "1";
  
      const mediaQuery = window.matchMedia("(max-width: 750px)");
      if (mediaQuery.matches) {
        register_form.style.zIndex = "1";
      }
    });
  
    ghost_login.addEventListener("click", function () {
      container_ghost.style.transform = "translateX(0px)";
      login_form.style.opacity = "1";
      register_form.style.opacity = "0";
  
      const mediaQuery = window.matchMedia("(max-width: 750px)");
      if (mediaQuery.matches) {
        register_form.style.zIndex = "0";
      }
    });
  });
  