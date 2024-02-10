function cargarImagenes(categoria) {
    var contenidoVentana = document.getElementById("contenidoVentana");

    // Limpia el contenido actual
    contenidoVentana.innerHTML = "";

    // Carga imágenes según la categoría
    switch (categoria) {
        case 'Ofertas':
             contenidoVentana.innerHTML +=titulosIniciales("OFERTAS");
            contenidoVentana.innerHTML+=mostrarTodasLasOfertas();
            break;
        case 'Boneles':
            contenidoVentana.innerHTML +=titulosIniciales("BONELESS");
            contenidoVentana.innerHTML+=mostrarTodosLosBoneles();
            break;

        case 'Alitas':
            contenidoVentana.innerHTML +=titulosIniciales("ALITAS");
            contenidoVentana.innerHTML+=mostrarTodasLasOfertas();
        
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




//COMPARTIR REDES SOCIALES
var sharedURL = "http://127.0.0.1:5500/#"; // Definir la URL compartida como una variable global

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

        htmlFragment += "<a href='https://www.facebook.com/sharer/sharer.php?u=" + sharedURL + "' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/fb.png' class='card-img' alt='Facebook'>" +
        "<h5 class='card-title'> Facebook</h5>" +
        "</div>" +
        "</a>";

        //URL WHATS
        htmlFragment += "<a href='https://api.whatsapp.com/send?text=" + sharedURL + "' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/wsp.png' class='card-img' alt='Whatssap'>" +
        "<h5 class='card-title'> Whatssap</h5>" +
        "</div>" +
        "</a>";

        //URL TIKTOK
        htmlFragment += "<a href='https://www.tiktok.com/upload/?reference=" + sharedURL + "' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/tk.png' class='card-img' alt='Tiktok'>" +
        "<h5 class='card-title'> Tiktok </h5>" +
        "</div>" +
        "</a>";

        //URL INSTAGRAM
        htmlFragment += "<a href='https://www.instagram.com/share?url=" + sharedURL + "' class='list-group-item list-group-item-action list-group-item-primary redes' target='_blank'><div class='card-body'>" +
        "<img src='images/redes/igm.png' class='card-img' alt='Instagram'>" +
        "<h5 class='card-title'> Instagram </h5>" +
        "</div>" +
        "</a>";
    // Devuelve el fragmento
    return htmlFragment;
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
    retornarOfertas += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarOfertas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    return retornarOfertas;
}

function mostrarTodosLosBoneles()
{
    var retornarBoneles="";
    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Chico (310 g)", "descripcion","$95");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Mediano (610 g)", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $185");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Grande (910 g)", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $280");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Extra Grande (1.30 kg)", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $375");

    retornarBoneles += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("Familiar (1.60 kg)", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $470");

    return retornarBoneles;
}

function mostrarTodasLasAlitas()
{
    var retornarAlitas="";
    retornarAlitas += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarAlitas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarAlitas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarAlitas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarAlitas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    return retornarAlitas;
}


function mostrarTodasLasHamburguesas()
{
    var retornarhamburguesas="";
    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonSencilla.png")
    + insertarContenidoImagen_url("Sirlon", "descripcion","$58");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlondoble.png")
    + insertarContenidoImagen_url("Sirlon Doble", "descripcion"," $69");

    retornarhamburguesas += insertarImagen_url("hamburguesas/baconCheese.png")
    + insertarContenidoImagen_url("Bacon Cheese", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonBBQMango.png")
    + insertarContenidoImagen_url("Sirlon BBQ/Mango Habanero", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/hamburgesadepollo.png")
    + insertarContenidoImagen_url("Hamburguesa de Pollo", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $78");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlontriple.png")
    + insertarContenidoImagen_url("Sirlon Triple", "descripcion"," $83");

    retornarhamburguesas += insertarImagen_url("hamburguesas/kokoburger.png")
    + insertarContenidoImagen_url("KOKO Burger", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $96");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("Sirlon con Pollo", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $96");

    retornarhamburguesas += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");
    
    return retornarhamburguesas;
}

function mostrarTodasLasHamburguesasLibra()
{
    var retornarhamburguesasLibra="";
    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonSencilla.png")
    + insertarContenidoImagen_url("Sirlon", "descripcion","$64");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlondoble.png")
    + insertarContenidoImagen_url("Sirlon Doble", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $79");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/baconCheese.png")
    + insertarContenidoImagen_url("Bacon Cheese", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $83");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonBBQMango.png")
    + insertarContenidoImagen_url("Sirloin BBQ/Mango Habanero", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $83");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/kokoburger.png")
    + insertarContenidoImagen_url("KOKO Burger", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $103");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("Sirlon con Pollo", "descripcion","$103");

    retornarhamburguesasLibra += insertarImagen_url("hamburguesas/sirlonconpollo.png")
    + insertarContenidoImagen_url("Sirlon con Pollo", "descripcion","$103");
    return retornarhamburguesasLibra;
}

function mostrarTodasLasPapasFritas()
{
    var retornarPapasFritas="";
    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Chicas", "descripcion","$30");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Medianas", "descripcion","$50");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Grandes", "descripcion","$73");

    retornarPapasFritas += insertarImagen_url("papasfritas/papas_logo.png")
    + insertarContenidoImagen_url("Papas Familiares", "descripcion","$99");
    return retornarPapasFritas;
}

function mostrarTodasLosHotDogs()
{
    var retornarHotDogs="";
    retornarHotDogs += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarHotDogs += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarHotDogs += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarHotDogs += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarHotDogs += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    return retornarHotDogs;
}

function mostrarTodasLasBebidas()
{
    var retornarBebidas="";
    retornarBebidas += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarBebidas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarBebidas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarBebidas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarBebidas += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    return retornarBebidas;
}

function mostrarExtras()
{
    var retornarExtras="";
    retornarExtras += insertarImagen_url("oferta/logo_oferta.png")
    + insertarContenidoImagen_url("nombre_producto", "descripcion","precio");

    retornarExtras += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarExtras += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarExtras += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    retornarExtras += insertarImagen_url("boneles/boneles_logo.png")
    + insertarContenidoImagen_url("boneles", "50g de boneles 10 gramos de zanahoria 2 ranchs"," $60");

    return retornarExtras;
}


//FILTRAR compartida
function filtrarComidas(termino) {


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