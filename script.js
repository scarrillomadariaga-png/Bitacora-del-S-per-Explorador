// === VARIABLES GLOBALES ===
let avatarSeleccionado = null;
let avatarRuta = ""; 
let nombreUsuario = "";

// === NAVEGACIÓN ENTRE PÁGINAS ===
function irAPagina(idPagina) {
    console.log('🚀 Navegando a:', idPagina);
    
    // Ocultar todas las páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('activa');
    });
    
    // Mostrar la página seleccionada
    const paginaDestino = document.getElementById(idPagina);
    if (paginaDestino) {
        paginaDestino.classList.add('activa');
        console.log('✅ Página mostrada:', idPagina);
    } else {
        console.error('❌ No se encontró la página:', idPagina);
    }
    // Si la página mostrada tiene el video, activar la función del video
if (idPagina === "pagina-frases-tipicas" || idPagina === "pagina-video") {
  activarVideoYoutube();
}
}

// === MANUAL DE INSTRUCCIONES ===
function mostrarseccion() {
    const seccionManual = document.getElementById('seccion-manual');
    if (seccionManual) {
        seccionManual.classList.add('activa');
        // Mostrar el primer tab por defecto
        showTab(1);
    }
}

function ocultarseccion() {
    const seccionManual = document.getElementById('seccion-manual');
    if (seccionManual) {
        seccionManual.classList.remove('activa');
        // Ocultar todos los tabs
        const tabs = document.querySelectorAll('.indicaciones');
        tabs.forEach(tab => tab.classList.remove('active'));
        
        // Volver a mostrar los botones del menú
        const botonesManual = document.getElementById('botones-manual');
        if (botonesManual) {
            botonesManual.style.display = 'grid';
        }
    }
}

// === TABS DEL MANUAL ===
function showTab(numeroTab) {
    // Ocultar todos los tabs
    const tabs = document.querySelectorAll('.indicaciones');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Ocultar los botones del menú
    const botonesManual = document.getElementById('botones-manual');
    if (botonesManual) {
        botonesManual.style.display = 'none';
    }
    
    // Mostrar el tab seleccionado
    const tabSeleccionado = document.getElementById('tab' + numeroTab);
    if (tabSeleccionado) {
        tabSeleccionado.classList.add('active');
    }
}

function goBack() {
    // Ocultar todos los tabs
    const tabs = document.querySelectorAll('.indicaciones');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar nuevamente los botones del menú
    const botonesManual = document.getElementById('botones-manual');
    if (botonesManual) {
        botonesManual.style.display = 'grid';
    }
}

// === SELECCIÓN DE AVATAR ===
function seleccionarAvatar() {
    const circulos = document.querySelectorAll('.avatar-circulo');
    
    circulos.forEach((circulo, index) => {
        circulo.addEventListener('click', function() {
            // Quitar selección anterior de todos los círculos
            circulos.forEach(c => c.classList.remove('seleccionado'));
            
            // Marcar círculo seleccionado
            this.classList.add('seleccionado');
            
            // Obtener la imagen del avatar
            const img = this.querySelector('img');
            
            // Guardar información
            avatarSeleccionado = index + 1;
            avatarRuta = img ? img.src : '';
            
            console.log('✅ Avatar seleccionado:', avatarSeleccionado, avatarRuta);
        });
    });
}

// === COMENZAR AVENTURA ===
function comenzarAventura(paginaDestino) {
    // Obtener el nombre del usuario
    const inputNombre = document.getElementById('nombre');
    nombreUsuario = inputNombre.value.trim();
    
    // Validar que se haya seleccionado un avatar
    if (!avatarSeleccionado) {
        alert('¡Por favor selecciona un avatar primero!');
        return;
    }
    
    // Validar que se haya escrito un nombre
    if (nombreUsuario === '') {
        alert('¡Por favor escribe tu nombre!');
        inputNombre.focus();
        return;
    }
    
    // Validar que el nombre tenga al menos 2 caracteres
    if (nombreUsuario.length < 2) {
        alert('¡Por favor escribe un nombre más largo!');
        inputNombre.focus();
        return;
    }
    
    
    // Guardar datos en consola
    console.log('👤 Avatar seleccionado:', avatarSeleccionado);
    console.log('📝 Nombre del usuario:', nombreUsuario);
    console.log('🖼️ Ruta del avatar:', avatarRuta);
    
    // Mostrar el nombre en la página de bienvenida
    const spanNombre = document.getElementById('nombre-usuario');
    if (spanNombre) {
        spanNombre.textContent = ' ' + nombreUsuario;
    }
    
    // Mostrar el avatar en la página de bienvenida
    const imgAvatar = document.getElementById('avatar-usuario');
    if (imgAvatar && avatarRuta) {
        imgAvatar.src = avatarRuta;
        imgAvatar.alt = 'Avatar de ' + nombreUsuario;
    }
    
    // Ir a la página de destino (por defecto bienvenida)
    const destino = paginaDestino || 'pagina-bienvenida';
    irAPagina(destino);
}

// === FUNCIONES AUXILIARES ===

// Función para obtener el avatar seleccionado
function getAvatarSeleccionado() {
    return avatarSeleccionado;
}

// Función para obtener el nombre del usuario
function getNombreUsuario() {
    return nombreUsuario;
}

// Función para resetear la selección (útil para debugging)
function resetearSeleccion() {
    avatarSeleccionado = null;
    avatarRuta = "";
    nombreUsuario = "";
    
    const circulos = document.querySelectorAll('.avatar-circulo');
    circulos.forEach(c => c.classList.remove('seleccionado'));
    
    const inputNombre = document.getElementById('nombre');
    if (inputNombre) {
        inputNombre.value = '';
    }
    
    console.log('🔄 Selección reseteada');
}

// Función para mostrar video (si la necesitas)
function mostrarVideo() {
    const video = document.getElementById("video");
    if (video) {
        video.style.display = "block";
    }
}

// === INICIALIZACIÓN AL CARGAR LA PÁGINA ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Bitácora del Súper Explorador cargada');
    
    // Asegurarse de que solo la página de inicio esté visible
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('activa');
    });
    
    const paginaInicio = document.getElementById('pagina-inicio');
    if (paginaInicio) {
        paginaInicio.classList.add('activa');
        console.log('✅ Página de inicio activada');
    }
    
    // Configurar la selección de avatares
    seleccionarAvatar();
    
    // Cerrar el manual al hacer clic fuera de él
    const seccionManual = document.getElementById('seccion-manual');
    if (seccionManual) {
        seccionManual.addEventListener('click', function(e) {
            // Solo cerrar si se hace clic en el fondo oscuro, no en el contenido
            if (e.target === this) {
                ocultarseccion();
            }
        });
    }
    
    // Prevenir que el formulario se envíe al presionar Enter
    const inputNombre = document.getElementById('nombre');
    if (inputNombre) {
        inputNombre.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                comenzarAventura('pagina-bienvenida');
            }
        });
    }
    
    // Agregar logs a botones para debugging
    const botonesNav = document.querySelectorAll('[onclick*="irAPagina"]');
    console.log('🔘 Botones de navegación encontrados:', botonesNav.length);
});

// === EVENTOS DE TECLADO ===
document.addEventListener('keydown', function(e) {
    // Presionar ESC para cerrar el manual
    if (e.key === 'Escape') {
        const seccionManual = document.getElementById('seccion-manual');
        if (seccionManual && seccionManual.classList.contains('activa')) {
            ocultarseccion();
        }
    }
});
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('flipped');
    }
}
// Sistema de niveles para unidades
let nivelesUnidadesCompletados = [];

// Cargar progreso de unidades
function cargarProgresoUnidades() {
    const progreso = localStorage.getItem('nivelesUnidadesCompletados');
    if (progreso) {
        nivelesUnidadesCompletados = JSON.parse(progreso);
        actualizarNivelesUnidades();
    }
}

// Guardar progreso de unidades
function guardarProgresoUnidades() {
    localStorage.setItem('nivelesUnidadesCompletados', JSON.stringify(nivelesUnidadesCompletados));
}

// Iniciar un nivel (va a la página correspondiente)
function iniciarNivel(paginaDestino) {
    irAPagina(paginaDestino);
}

// Completar un nivel
function completarNivel(nivelId, paginaSiguiente) {
    // Marcar nivel como completado
    if (!nivelesUnidadesCompletados.includes(nivelId)) {
        nivelesUnidadesCompletados.push(nivelId);
        guardarProgresoUnidades();
    }

    // Desbloquear siguiente nivel según el nivel actual
    let siguienteNivelId = null;
    if (nivelId === 'nivel-unidad-2') {
        siguienteNivelId = 'nivel-unidad-3';
    } else if (nivelId === 'nivel-unidad-3') {
        siguienteNivelId = 'nivel-unidad-4';
    }

    // Cambiar imágenes de insignias (bloqueadas/desbloqueadas)
    const actual = document.getElementById(nivelId);
    if (actual) {
        actual.classList.add('completado');
        const imgBloqueada = actual.querySelector('.insignia.bloqueada');
        const imgDesbloqueada = actual.querySelector('.insignia.desbloqueada');
        if (imgBloqueada && imgDesbloqueada) {
            imgBloqueada.style.display = 'none';
            imgDesbloqueada.style.display = 'block';
        }
    }

    if (siguienteNivelId) {
        const siguiente = document.getElementById(siguienteNivelId);
        if (siguiente) {
            siguiente.classList.add('desbloqueado');
            const imgBloqueada = siguiente.querySelector('.insignia.bloqueada');
            const imgDesbloqueada = siguiente.querySelector('.insignia.desbloqueada');
            if (imgBloqueada && imgDesbloqueada) {
                imgBloqueada.style.display = 'none';
                imgDesbloqueada.style.display = 'block';
            }
        }
    }

    guardarProgresoUnidades();

    // Ir a la página siguiente
    irAPagina(paginaSiguiente);

    // Mensaje si completa todo
    if (nivelesUnidadesCompletados.length === 3) {
        setTimeout(() => {
            alert('🎉 ¡Felicitaciones! Has completado todas las rutas del mapa.');
        }, 500);
    }
}
// Actualizar estado visual de los niveles
function actualizarNivelesUnidades() {
    const niveles = ['nivel-unidad-2', 'nivel-unidad-3', 'nivel-unidad-4'];

    niveles.forEach((nivelId, index) => {
        const card = document.getElementById(nivelId);
        if (!card) return;

        // Completados
        if (nivelesUnidadesCompletados.includes(nivelId)) {
            card.classList.add('completado', 'desbloqueado');
        } 
        // El primer nivel siempre está desbloqueado
        else if (index === 0) {
            card.classList.add('desbloqueado');
        } 
        // Desbloquea el siguiente solo si el anterior está completado
        else if (nivelesUnidadesCompletados.includes(niveles[index - 1])) {
            card.classList.add('desbloqueado');
        } 
        else {
            card.classList.remove('desbloqueado', 'completado');
        }
    });
}

// Reiniciar progreso de unidades (opcional)
function reiniciarNivelesUnidades() {
    nivelesUnidadesCompletados = [];
    localStorage.removeItem('nivelesUnidadesCompletados');
    
    // Bloquear todos excepto unidad 2
    const niveles = ['nivel-unidad-2', 'nivel-unidad-3', 'nivel-unidad-4'];
    niveles.forEach((nivelId, index) => {
        const card = document.getElementById(nivelId);
        if (card) {
            card.classList.remove('completado', 'desbloqueado');
            if (index === 0) {
                card.classList.add('desbloqueado');
            }
        }
    });
}
// Cargar progreso al iniciar (agregar a la función DOMContentLoaded existente)
window.addEventListener('DOMContentLoaded', function() {
    cargarProgresoUnidades();
});
// === VIDEO INTERACTIVO ===
function activarVideoYoutube() {
  const contenedor = document.getElementById("contenedor-video");
  if (!contenedor) return;

  // Eliminar posibles iframes previos (para reiniciar el video si vuelves a esta página)
  contenedor.innerHTML = `
    <img src="https://img.youtube.com/vi/_oSmiKED8ig/0.jpg"
         alt="Miniastura del video educativo"
         class="miniatura-video">
    <div class="boton-play">▶</div>
  `;
  // Evento de clic para reproducir el video
  contenedor.addEventListener("click", function reproducirVideo() {
    contenedor.innerHTML = `
      <iframe width="100%" height="480"
        src="https://www.youtube.com/embed/_oSmiKED8ig?autoplay=1"
        title="Video educativo"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  });
}
// Abrir sección de progreso
function abrirSeccionProgreso() {
    const seccion = document.getElementById('seccion-progreso-oculta');
    if (seccion) {
        seccion.classList.add('activa');
        cargarDatosModalProgreso();
        
        setTimeout(() => {
            actualizarBarraModalProgreso();
        }, 300);
    }
}

// Cerrar sección de progreso
function cerrarSeccionProgreso() {
    const seccion = document.getElementById('seccion-progreso-oculta');
    if (seccion) {
        seccion.classList.remove('activa');
    }
}

// Cargar datos del usuario en el modal
function cargarDatosModalProgreso() {
    const avatarModal = document.getElementById('avatar-modal-progreso');
    if (avatarModal && avatarRuta) {
        avatarModal.src = avatarRuta;
    }

    const nombreModal = document.getElementById('nombre-modal-progreso');
    const tituloModal = document.getElementById('titulo-progreso-modal');
    
    if (nombreModal && nombreUsuario) {
        nombreModal.textContent = nombreUsuario;
    }
    
    if (tituloModal && nombreUsuario) {
        tituloModal.textContent = `Bitácora de ${nombreUsuario}`;
    }
}

// Actualizar barra e insignias del modal
function actualizarBarraModalProgreso() {
    const progresoGuardado = localStorage.getItem('nivelesUnidadesCompletados');
    let progreso = [];

    if (progresoGuardado) {
        progreso = JSON.parse(progresoGuardado);
    }

    // Contar unidades completadas (siempre incluir unidad 1)
    let unidadesCompletadas = 1; // Unidad 1 siempre completada
    if (progreso.includes('nivel-unidad-2')) unidadesCompletadas++;
    if (progreso.includes('nivel-unidad-3')) unidadesCompletadas++;
    if (progreso.includes('nivel-unidad-4')) unidadesCompletadas++;

    // Calcular porcentaje
    const porcentaje = Math.round((unidadesCompletadas / 4) * 100);

    // Actualizar barra
    const barraModal = document.getElementById('barra-modal-relleno');
    const porcentajeTexto = document.getElementById('porcentaje-modal-texto');
    const unidadesTexto = document.getElementById('unidades-completadas-modal');
    
    if (barraModal) {
        barraModal.style.width = porcentaje + '%';
    }
    
    if (porcentajeTexto) {
        porcentajeTexto.textContent = porcentaje + '%';
    }
    
    if (unidadesTexto) {
        unidadesTexto.textContent = unidadesCompletadas;
    }

const insignia1 = document.getElementById('insignia-modal-1');
if (insignia1) {
    insignia1.innerHTML = ''; // Limpiar contenido
    
    if (progreso.includes('nivel-unidad-2')) {
        // Mostrar imagen desbloqueada
        insignia1.classList.add('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-2-insignias-desbloqueada.png';
        img.alt = 'Insignia Unidad 2';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia1.appendChild(img);
    } else {
        // Mostrar imagen bloqueada
        insignia1.classList.remove('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-2-insignias-bloqueada.png';
        img.alt = 'Insignia Bloqueada';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia1.appendChild(img);
    }
}

// Actualizar insignia 2 (Unidad 3)
const insignia2 = document.getElementById('insignia-modal-2');
if (insignia2) {
    insignia2.innerHTML = ''; // Limpiar contenido
    
    if (progreso.includes('nivel-unidad-3')) {
        // Mostrar imagen desbloqueada
        insignia2.classList.add('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-3-insignias-desbloqueada.png';
        img.alt = 'Insignia Unidad 3';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia2.appendChild(img);
    } else {
        // Mostrar imagen bloqueada
        insignia2.classList.remove('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-3-insignias-bloqueada.png';
        img.alt = 'Insignia Bloqueada';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia2.appendChild(img);
    }
}

// Actualizar insignia 3 (Unidad 4)
const insignia3 = document.getElementById('insignia-modal-3');
if (insignia3) {
    insignia3.innerHTML = ''; // Limpiar contenido
    
    if (progreso.includes('nivel-unidad-4')) {
        // Mostrar imagen desbloqueada
        insignia3.classList.add('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-4-insignias-desbloqueada.png';
        img.alt = 'Insignia Unidad 4';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia3.appendChild(img);
    } else {
        // Mostrar imagen bloqueada
        insignia3.classList.remove('desbloqueada');
        const img = document.createElement('img');
        img.src = 'imagenes/ruta-4-insignias-bloqueada.png';
        img.alt = 'Insignia Bloqueada';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        insignia3.appendChild(img);
    }
}
}
// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const seccion = document.getElementById('seccion-progreso-oculta');
        if (seccion && seccion.classList.contains('activa')) {
            cerrarSeccionProgreso();
        }
    }
});
// Finalizar Unidad 2
function finalizarUnidad2() {
    // Completar el nivel
    completarNivel('nivel-unidad-2', 'pagina-menu-principal');
    
    // Mostrar mensaje de felicitación con la insignia
    mostrarMensajeUnidadCompletada(2);
}

// Finalizar Unidad 3
function finalizarUnidad3() {
    completarNivel('nivel-unidad-3', 'pagina-menu-principal');
    mostrarMensajeUnidadCompletada(3);
}

// Finalizar Unidad 4
function finalizarUnidad4() {
    completarNivel('nivel-unidad-4', 'pagina-menu-principal');
    mostrarMensajeUnidadCompletada(4);
}

// Mostrar mensaje con insignia ganada
function mostrarMensajeUnidadCompletada(numeroUnidad) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay-completado';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 20000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    // Crear contenedor del mensaje
    const contenedor = document.createElement('div');
    contenedor.style.cssText = `
        background: linear-gradient(135deg, #f9f1e3 0%, #e8dcc3 100%);
        border: 8px solid #8b5a3c;
        border-radius: 30px;
        padding: 50px;
        text-align: center;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.5s ease;
    `;

    // Títulos según la unidad
    const titulos = {
        2: '¡Felicitaciones! 🎉',
        3: '¡Excelente Trabajo! 🎉',
        4: '¡Eres un Súper Explorador! 🏆'
    };

    const mensajes = {
        2: 'Has completado la Unidad 2:<br><strong>Regiones Andina y Caribe</strong>',
        3: 'Has completado la Unidad 3:<br><strong>Regiones Pacífico e Insular</strong>',
        4: 'Has completado la Unidad 4:<br><strong>Regiones Amazonía y Orinoquía</strong><br><br>¡Has completado todas las unidades!'
    };

    const imagenes = {
        2: 'imagenes/ruta-2-insignias-desbloqueada.png',
        3: 'imagenes/ruta-3-insignias-desbloqueada.png',
        4: 'imagenes/ruta-4-insignias-desbloqueada.png'
    };

    // Contenido HTML
    contenedor.innerHTML = `
        <h1 style="
            font-size: 2.5em;
            color: #A7553F;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        ">${titulos[numeroUnidad]}</h1>
        
        <p style="
            font-size: 1.3em;
            color: #5d3a1a;
            margin-bottom: 30px;
            line-height: 1.6;
        ">${mensajes[numeroUnidad]}</p>
        
        <div style="
            width: 200px;
            height: 200px;
            margin: 0 auto 30px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            border: 8px solid #8b5a3c;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 
                0 10px 30px rgba(255, 215, 0, 0.5),
                inset 0 -5px 15px rgba(0,0,0,0.1);
            animation: pulsoInsignia 1.5s infinite;
        ">
            <img src="${imagenes[numeroUnidad]}" 
                 alt="Insignia Ganada" 
                 style="width: 85%; height: 85%; object-fit: contain;">
        </div>
        
        <p style="
            font-size: 1.1em;
            color: #808000;
            font-weight: bold;
            margin-bottom: 25px;
        ">¡Has ganado tu insignia!</p>
        
        <button onclick="cerrarMensajeCompletado()" style="
            background: linear-gradient(135deg, #A7553F 0%, #dda078 100%);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 25px;
            font-size: 1.2em;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        " onmouseover="this.style.transform='scale(1.05)'" 
           onmouseout="this.style.transform='scale(1)'">
            ¡Continuar Aventura!
        </button>
    `;

    overlay.appendChild(contenedor);
    document.body.appendChild(overlay);

    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulsoInsignia {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 15px 40px rgba(255, 215, 0, 0.8);
            }
        }
    `;
    document.head.appendChild(style);
}

// Cerrar mensaje y ir al menú principal
function cerrarMensajeCompletado() {
    const overlay = document.getElementById('overlay-completado');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            overlay.remove();
            irAPagina('pagina-menu-principal');
        }, 300);
    }
}
// Funciones para abrir y cerrar las secciones de actividades
function abrirActividad1() {
    const seccion = document.getElementById('seccion-actividad-1');
    if (seccion) {
        seccion.classList.add('activa');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
}

function cerrarActividad1() {
    const seccion = document.getElementById('seccion-actividad-1');
    if (seccion) {
        seccion.classList.remove('activa');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
}

function abrirActividad2() {
    const seccion = document.getElementById('seccion-actividad-2');
    if (seccion) {
        seccion.classList.add('activa');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarActividad2() {
    const seccion = document.getElementById('seccion-actividad-2');
    if (seccion) {
        seccion.classList.remove('activa');
        document.body.style.overflow = 'auto';
    }
}

function abrirActividad3() {
    const seccion = document.getElementById('seccion-actividad-3');
    if (seccion) {
        seccion.classList.add('activa');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarActividad3() {
    const seccion = document.getElementById('seccion-actividad-3');
    if (seccion) {
        seccion.classList.remove('activa');
        document.body.style.overflow = 'auto';
    }
}
// === MENSAJES DE CONSOLA PARA DEBUGGING ===
console.log('📚 Funciones disponibles:');
console.log('- irAPagina(id): Navegar entre páginas');
console.log('- mostrarseccion(): Abrir manual');
console.log('- ocultarseccion(): Cerrar manual');
console.log('- getAvatarSeleccionado(): Ver avatar seleccionado');
console.log('- getNombreUsuario(): Ver nombre ingresado');
console.log('- resetearSeleccion(): Reiniciar selección');
console.log('✅ Funciones de finalización de unidades cargadas')