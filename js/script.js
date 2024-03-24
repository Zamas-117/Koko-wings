function cargarImagenes(categoria) {
    var contenidoVentana = document.getElementById("contenidoVentana");

    // Limpia el contenido actual
    contenidoVentana.innerHTML = "";

    // Carga imágenes según la categoría
    switch (categoria) {
        case 'Ofertas':
             contenidoVentana.innerHTML +=titulosIniciales("OFERTAS");
            contenidoVentana.innerHTML+=mostrarTodasLasOfertas();
            contenidoVentana.innerHTML+=mostrarMenuSalsas("salsas/salsas.png");
            break;
        case 'Boneles':
            contenidoVentana.innerHTML +=titulosIniciales("BONELESS");
            contenidoVentana.innerHTML+=mostrarTodosLosBoneles();
            contenidoVentana.innerHTML+=mostrarMenuSalsas("salsas/salsas.png");
            break;

        case 'Alitas':
            contenidoVentana.innerHTML +=titulosIniciales("ALITAS");
            contenidoVentana.innerHTML+=mostrarTodasLasAlitas();
            contenidoVentana.innerHTML+=mostrarMenuSalsas("salsas/salsas.png");
        
        break;

        case 'Hamburguesas':
            contenidoVentana.innerHTML += mostrarApartadoHamburguesaSeleccion();
            // Marcar el botón "Hamburguesas 1/2 libra" como seleccionado
            document.querySelector('.hamburguesa1').classList.add('seleccionado');
            contenidoVentana.innerHTML+=mostrarTodasLasHamburguesas();

            break;

        case 'Hamburguesas1/2':
            contenidoVentana.innerHTML += mostrarApartadoHamburguesaSeleccion();
            // Marcar el botón "Hamburguesas 1/2 libra" como seleccionado
            document.querySelector('.hamburguesa2').classList.add('seleccionado');
            contenidoVentana.innerHTML+=mostrarTodasLasHamburguesasLibra();
                
            break;

        case 'Papas':
            contenidoVentana.innerHTML +=titulosIniciales("PAPAS FRITAS");
            contenidoVentana.innerHTML+=mostrarTodasLasPapasFritas();
            
            break;

        case 'HotDogs':
            contenidoVentana.innerHTML +=titulosIniciales("HOTDOGS");
            contenidoVentana.innerHTML+=mostrarTodasLosHotDogs();
            
            break;

        case 'Bebidas':
            contenidoVentana.innerHTML +=titulosIniciales("BEBIDAS");
            contenidoVentana.innerHTML+=mostrarTodasLasBebidas();
            break;

        case 'Extras':
            contenidoVentana.innerHTML +=titulosIniciales("EXTRAS");
            contenidoVentana.innerHTML+=mostrarExtras();
            break;

            default:
            // Maneja otras categorías o casos no especificados
            break;
    }
    
}


//ABRIR Y CERRAR VENTANA DE PRODUCTOS
function mostrarVentana(contenido) {
    var ventana = document.getElementById("ventana");
    var ventana_inicial = document.getElementById("ventana_inicial");
    ventana_inicial.style.display = "none";  // Corregido el nombre de la variable

    var contenidoVentana = document.getElementById("contenidoVentana");
    ventana.style.display = "block";

    contenidoVentana.innerHTML = "<p>" + contenido + "</p>";
    if(contenido != "") {
        cargarImagenes(contenido);
    }

    // Muestra la ventana modal
    ventana.style.display = "block";
}

  
function cerrarVentana() 
{

    var ventana = document.getElementById("ventana");
    ventana.style.display = "none";


    var ventana_inicial = document.getElementById("ventana_inicial");
    ventana_inicial.style.display = "block";
}



//CARGAR IMAGENES Y DESCRIPCION
function insertarImagen_url(url_imagen) 
{
    // insertamos la imagen de manera dinamica
    var htmlFragment = "<div class='list-group-item list-group-item-action list-group-item-primary'><div class='card-body'>" +
        "<img src='images/" + url_imagen + "' class='card-img' alt='Oferta'>";

    // Devuelve el fragmento 
    return htmlFragment;
}

function insertarContenidoImagen_url(nombre_producto, descripcion,precio) 
{
    // Insertamos la Descripcion de la imagen de manera dinamica
    var htmlFragment = 
    "<h5 class='card-title'>"+ nombre_producto +"<br> <small class='text-body-secondary'> "+ descripcion +" </small></h5>" +
    "<p class='card-row precio'><small class='text-body-secondary'>"+ precio +"</small></p>" +
    "</div>" +
    "</div>";

     // Devuelve el fragmento 
    return htmlFragment;
}

function mostrarMenuSalsas(url_imagen) 
{
    var htmlFragment = "<div class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body frasecentral '>" +
    "<img src='images/" + url_imagen + "' class='card-img' alt='Oferta' style='width:200px; height:auto;'>" +
    "</div>" +
    "</div>";

    return htmlFragment;
}




//COMPARTIR REDES SOCIALES
var sharedURL = "kokowings.netlify.app"; // Definir la URL compartida como una variable global

function compartirRedesSociales() {
    var ventana = document.getElementById("ventana");
    var ventana_inicial = document.getElementById("ventana_inicial");
    ventana_inicial.style.display = "none";  // Corregido el nombre de la variable

    var contenidoVentana = document.getElementById("contenidoVentana");
    ventana.style.display = "block";

    contenidoVentana.innerHTML = "";
    contenidoVentana.innerHTML = ventanaRedesSociales();
}

function ventanaRedesSociales() {

    //URL FACEBOOK

    var htmlFragment = titulosIniciales("COMPARTIR");

        htmlFragment += "<a href='https://www.facebook.com/sharer/sharer.php?u=" + sharedURL + "' onclick='copyTextToClipboard(sharedURL)' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/fb.png' class='card-img' alt='Facebook'>" +
        "<h5 class='card-title'> Facebook</h5>" +
        "</div>" +
        "</a>";

        //URL WHATS
        htmlFragment += "<a href='https://api.whatsapp.com/send?text=" + sharedURL + "' onclick='copyTextToClipboard(sharedURL)' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/wsp.png' class='card-img' alt='Whatssap'>" +
        "<h5 class='card-title'> Whatssap</h5>" +
        "</div>" +
        "</a>";

        //URL TIKTOK
        htmlFragment += "<a href='https://www.tiktok.com/upload/?reference=" + sharedURL + "' onclick='copyTextToClipboard(sharedURL)' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/tk.png' class='card-img' alt='Tiktok'>" +
        "<h5 class='card-title'> Tiktok </h5>" +
        "</div>" +
        "</a>";

        //URL INSTAGRAM
        htmlFragment += "<a href='https://www.instagram.com/share?url=" + sharedURL + "' onclick='copyTextToClipboard(sharedURL)' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/igm.png' class='card-img' alt='Instagram'>" +
        "<h5 class='card-title'> Instagram </h5>" +
        "</div>" +
        "</a>";
    // Devuelve el fragmento
    return htmlFragment;
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Link copiado!");  // Optional: Success message
      })
      .catch(err => {
        console.error("Failed to copy link:", err);  // Optional: Error handling
      });
  }


//CONTACRANOS
function contactanosRedesSociales() {
    var ventana = document.getElementById("ventana");
    var ventana_inicial = document.getElementById("ventana_inicial");
    ventana_inicial.style.display = "none";  // Corregido el nombre de la variable

    var contenidoVentana = document.getElementById("contenidoVentana");
    ventana.style.display = "block";

    contenidoVentana.innerHTML = "";
    contenidoVentana.innerHTML = ventanaContactanosRedesSociales();
}

function ventanaContactanosRedesSociales() {

    
    //URL FACEBOOK
    var htmlFragment = titulosIniciales("CONTACTANOS");

        htmlFragment += "<a href='https://www.facebook.com/profile.php?id=100076363658883' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/fb.png' class='card-img' alt='Facebook'>" +
        "<h5 class='card-title'> Facebook</h5>" +
        "</div>" +
        "</a>";

        //URL WHATS
        htmlFragment += "<a href='https://api.whatsapp.com/send?phone=+526568230426&text=Buen%20d%C3%ADa,%20Me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n.' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/wsp.png' class='card-img' alt='Whatssap'>" +
        "<h5 class='card-title'> Whatssap</h5>" +
        "</div>" +
        "</a>";

        //URL TIKTOK
        htmlFragment += "<a href='https://www.tiktok.com/@kokowings' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/tk.png' class='card-img' alt='Tiktok'>" +
        "<h5 class='card-title'> Tiktok </h5>" +
        "</div>" +
        "</a>";


    // Devuelve el fragmento
    return htmlFragment;
}


//funcion para los titulos centrados
function titulosIniciales(titulo) 
{
    var htmlFragment = "<div class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body frasecentral '>" +
        "<h5 class='card-title'>"+titulo+"</h5>" +
        "</div>" +
        "</div>";
    
    return htmlFragment;
}


// insertarImagen_url(images/ "localizacion de tu imagen")  &&
// insertarContenidoImagen_url("nombre del producto", "descripcion","precio")
function mostrarApartadoHamburguesaSeleccion() {
    const apartado = "<div class='list-group-item list-group-item-action list-group-item-primary card-body-hamburguesa'>" +
        "<button class='menu-hamburguesa hamburguesa1 ' onclick=\"mostrarVentana('Hamburguesas')\"> Hamburguesas</button >" +
        "<button class='menu-hamburguesa hamburguesa2' onclick=\"mostrarVentana('Hamburguesas1/2')\"> Hamburguesas 1/2 libra</button>" +
        "</div>";

        const botones = document.querySelectorAll('.menu-hamburguesa');
        botones.forEach(b => b.classList.remove('seleccionado'));

    return apartado;
}

function mostrarTodasLasOfertas()
{
    var retornarOfertas ="";

    retornarOfertas += insertarImagen_url("hamburguesas/sirlonSencilla.png")
    + insertarContenidoImagen_url("Combo 1", "Sirloin Sencilla + papas chicas + soda de sabor"," $95");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Combo 2", "Boneless Chicos + papas chicas + soda de sabor"," $140");

    retornarOfertas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Combo 3", "(10 pz) Alitas + papas chicas + soda de sabor"," $130");

    retornarOfertas += insertarImagen_url("hotdog/hotdog_logo.png")
    + insertarContenidoImagen_url("Combo 4", "2 Hotdogs + papas chicas + soda de sabor"," $110");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Boneless Grandes", "(910 gr) Zanahorias con aderezo Ranch, Apio y papas fritas chicas ¡GRATIS!"," $280");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Boneless Extra Grandes", "(1.30 kg) Zanahorias con aderezo Ranch, Apio y papas fritas chicas ¡GRATIS!"," $375");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Boneless Familiares", "(1.60 kg) Zanahorias con aderezo Ranch, Apio y papas fritas chicas ¡GRATIS!"," $470");

    retornarOfertas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas", "(40 pz) Zanahorias con aderezo Ranch, Apio y papas fritas chicas ¡GRATIS!"," $348");

    retornarOfertas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas", "(50 pz) Zanahorias con aderezo Ranch, Apio y papas fritas chicas ¡GRATIS!","$435");

    return retornarOfertas;
}


function mostrarTodosLosBoneles()
{
    var retornarBoneles="";
    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Chico (310 gr)", "Zanahorias con aderezo Ranch + Apio","$95");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Mediano (610 gr)", "Zanahorias con aderezo Ranch + Apio"," $185");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Grande (910 gr)", "Zanahorias con aderezo Ranch + Apio y papas fritas chicas ¡GRATIS!"," $280");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Extra Grande (1.30 kg)", "Zanahorias con aderezo Ranch + Apio y papas fritas chicas ¡GRATIS!"," $375");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Familiar (1.60 kg)", "Zanahorias con aderezo Ranch + Apio y papas fritas chicas ¡GRATIS!"," $470");

    return retornarBoneles;
}

function mostrarTodasLasAlitas()
{
    var retornarAlitas="";
    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (10 pz)", "Zanahorias con aderezo Ranch + Apio + 2 salsas ","$90");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (12 pz)", "Zanahorias con aderezo Ranch + Apio + 2 salsas ","$100");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (16 pz)", "Zanahorias con aderezo Ranch + Apio + 2 salsas","$138");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (20 pz) ", "Zanahorias con aderezo Ranch + Apio + 3 salsas","$172");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (26 pz)", "Zanahorias con aderezo Ranch + Apio + 3 salsas","$226");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (30pz)", "Zanahorias con aderezo Ranch + Apio + 3 salsas","$260");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (40 pz)", "Zanahorias con aderezo Ranch + Apio + 4 salsas","$348");

    retornarAlitas += insertarImagen_url("alitas/alitas.png")
    + insertarContenidoImagen_url("Alitas (50 pz)", "Zanahorias con aderezo Ranch + Apio + 4 salsas","$435");

    return retornarAlitas;
}


function mostrarTodasLasHamburguesas()
{
    var retornarhamburguesas="";
    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonSencilla.png")
    + insertarContenidoImagen_url("Sirlon", "Mayonesa + Ketchup + Mostaza + Lechuga + Cebolla + Tomate + Queso","$58");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlondoble.png")
    + insertarContenidoImagen_url("Sirlon Doble", "3 Liquidos + Lechuga + Cebolla + Tomate +  2 Quesos + 2 Carnes"," $69");

    retornarhamburguesas += insertarImagen_url("hamburguesas/baconCheese.png")
    + insertarContenidoImagen_url("Bacon Cheese", "Mayonesa + Queso Derretido + Jalapeño + Queso"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonBBQMango.png")
    + insertarContenidoImagen_url("Sirlon BBQ/Mango Habanero", "Mayonesa + BBQ + Mango Habanero + Doble Tocino + Jamon + 2 Quesos"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/hamburgesadepollo.png")
    + insertarContenidoImagen_url("Hamburguesa de Pollo", "Mayonesa + Ketchup + Lechuga + Tomate + Pollo"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/especial.png")
    + insertarContenidoImagen_url("Especial", "3 Liquidos + Lechuga + Cebolla + Tomate +  Doble Tocino + Winnie Americano + Jamon + Queso + Aguacate"," $88");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlontriple.png")
    + insertarContenidoImagen_url("Sirlon Triple", "3 Liquidos + Lechuga + Cebolla + Tomate +  3 Quesos + 3 Carnes"," $83");

    retornarhamburguesas += insertarImagen_url("hamburguesas/kokoburger.png")
    + insertarContenidoImagen_url("KOKO Burger", "3 Liquidos + Lechuga + Cebolla + Tomate + Queso Derretido + Salsicha para Asar + Doble Tocino + Queso + Carne + Aguacate"," $96");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("Sirlon con Pollo",  "Mayonesa + Ketchup + Lechuga + Tomate + Pollo + Queso + Carne"," $96");

    return retornarhamburguesas;
}

function mostrarTodasLasHamburguesasLibra()
{
    var retornarhamburguesasLibra="";
    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonSencilla.png")
    + insertarContenidoImagen_url("Sirlon", "Mayonesa + Ketchup + Mostaza + Lechuga + Cebolla + Tomate + Queso","$64");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlondoble.png")
    + insertarContenidoImagen_url("Sirlon Doble", "3 Liquidos + Lechuga + Cebolla + Tomate +  2 Quesos + 2 Carnes"," $79");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/baconCheese.png")
    + insertarContenidoImagen_url("Bacon Cheese", "Mayonesa + Queso Derretido + Jalapeño + Queso"," $83");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonBBQMango.png")
    + insertarContenidoImagen_url("Sirloin BBQ/Mango Habanero",  "Mayonesa + BBQ + Mango Habanero + Doble Tocino + Jamon + 2 Quesos"," $83");

    retornarhamburguesas += insertarImagen_url("hamburguesas/especial.png")
    + insertarContenidoImagen_url("Especial", "3 Liquidos + Lechuga + Cebolla + Tomate +  Doble Tocino + Winnie Americano + Jamon + Queso + Aguacate"," $93");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/kokoburger.png")
    + insertarContenidoImagen_url("KOKO Burger", "3 Liquidos + Lechuga + Cebolla + Tomate + Queso Derretido + Salsicha para Asar + Doble Tocino + Queso + Carne + Aguacate"," $103");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("Sirlon con Pollo",  "Mayonesa + Ketchup + Lechuga + Tomate + Pollo + Queso","$103");

    return retornarhamburguesasLibra;
}

function mostrarTodasLasPapasFritas()
{
    var retornarPapasFritas="";
    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Chicas (150 gr)", "","$30");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Medianas (300 gr)", "","$50");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Grandes (450 gr)", "","$73");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Familiares (600 gr)", "","$99");
    return retornarPapasFritas;
}

function mostrarTodasLosHotDogs()
{
    var retornarHotDogs="";
    retornarHotDogs += insertarImagen_url("hotdog/hotdog_logo.png")
    + insertarContenidoImagen_url("Hot dog sencillo", "Mostaza + Ketchup + Mayonesa + Tomate + Curtidos","$25");

    retornarHotDogs += insertarImagen_url("hotdog/hotdog_logo.png")
    + insertarContenidoImagen_url("Dogo Cheese", "Mostaza + Ketchup + Mayonesa + (Rufles, queso para nachos y tocino)","$35");

   retornarHotDogs += insertarImagen_url("hotdog/banderilla.png")
    + insertarContenidoImagen_url("Banderillas", "mostaza + Ketchup + Mayonesa ","$35");

    retornarHotDogs += insertarImagen_url("hotdog/dedosQueso.png")
    + insertarContenidoImagen_url("Dedos de queso", "(4 pz) + Ketchup","$50");

    return retornarHotDogs;
}

function mostrarTodasLasBebidas()
{
    var retornarBebidas="";
    retornarBebidas += insertarImagen_url("bebidas/kool-aid.png")
    + insertarContenidoImagen_url("Kool Aid", "","$12");

    retornarBebidas += insertarImagen_url("bebidas/shasta.png")
    + insertarContenidoImagen_url("Shasta", ""," $17");

    retornarBebidas += insertarImagen_url("bebidas/coca-cola.png")
    + insertarContenidoImagen_url("Coca-Cola", ""," $25");

    retornarBebidas += insertarImagen_url("bebidas/agua-ciel.png")
    + insertarContenidoImagen_url("Agua (1 lt)", ""," $18");

    return retornarBebidas;
}

function mostrarExtras()
{
    var retornarExtras="";
    retornarExtras += insertarImagen_url("extras/ranch.png")
    + insertarContenidoImagen_url("Ranch", "","$10");

    retornarExtras += insertarImagen_url("extras/queso.png")
    + insertarContenidoImagen_url("Queso", "","$15");

    retornarExtras += insertarImagen_url("extras/winnie.png")
    + insertarContenidoImagen_url("Winnie", "","$10");

    retornarExtras += insertarImagen_url("extras/tocino.png")
    + insertarContenidoImagen_url("Tocino", "","$15");

    retornarExtras += insertarImagen_url("extras/salchicha.png")
    + insertarContenidoImagen_url("Salchicha", "","$15");

    retornarExtras += insertarImagen_url("extras/bonelesnaturales.png")
    + insertarContenidoImagen_url("Boneless", "","$30");

    retornarExtras += insertarImagen_url("extras/salsas.png")
    + insertarContenidoImagen_url("Salsa", "Escojer","$10");
    
    retornarExtras+=mostrarMenuSalsas("salsas/salsas.png");



    return retornarExtras;
}


//FILTRAR compartida
function filtrarComidas(termino) 
{


    if(termino != "")
    {
    var ventana = document.getElementById("ventana");
    var ventana_inicial = document.getElementById("ventana_inicial");
    var contenidoVentana = document.getElementById("contenidoVentana");

    ventana.style.display = "block"; // Muestra la ventana
    ventana_inicial.style.display = "none"; // Oculta ventana_inicial

    contenidoVentana.innerHTML = ""; // Limpiamos el contenido

    // Llamamos a las funciones de mostrar con el término de búsqueda
    contenidoVentana.innerHTML +=
        mostrarTodasLasOfertas() +
        mostrarTodosLosBoneles() +
        mostrarTodasLasAlitas() +
        mostrarTodasLosHotDogs() +
        mostrarTodasLasPapasFritas() +
        mostrarTodasLasHamburguesas() +
        mostrarExtras() +
        mostrarTodasLasBebidas();

        // Obtén todas las comidas después de haber agregado el contenido
var comidas = ventana.querySelectorAll('.card-body');

// Iteramos sobre las comidas y mostramos según el término de búsqueda
comidas.forEach(function(comida, index) {
    var nombreComidaElement = comida.querySelector('.card-title');
    var precioComidaElement = comida.querySelector('.precio');

    // Verificamos si los elementos existen antes de acceder a sus propiedades
    if (nombreComidaElement && precioComidaElement) {
        var nombreComida = nombreComidaElement.textContent.toLowerCase();
        var precioComida = precioComidaElement.textContent.toLowerCase();

        if (nombreComida.includes(termino.toLowerCase()) || precioComida.includes(termino.toLowerCase())) {
            var comidaContainer = document.createElement('div');
            comidaContainer.classList.add('comida-container', 'list-group-item', 'list-group-item-action', 'list-group-item-primary');

            // Aplicar el padding a todos los elementos
            comidaContainer.style.padding = '8px 16px';

            // Clonamos la comida y la agregamos al contenedor
            var clonedComida = comida.cloneNode(true);
            comidaContainer.appendChild(clonedComida);

            // Reemplazamos la comida original con el contenedor
            comida.parentNode.replaceChild(comidaContainer, comida);
        } else {
            comida.style.display = 'none'; // Oculta la comida si no coincide
        }
    }
});
    }
    else
    {
        cerrarVentana();
    }
}