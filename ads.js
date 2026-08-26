// Archivo: ads.js - Inyector correcto para banners de Adsterra

document.addEventListener("DOMContentLoaded", function() {
    
    // Función para insertar el banner de Adsterra de forma segura
    function insertarBannerAdsterra(containerId) {
        var contenedor = document.getElementById(containerId);
        if (!contenedor) return;

        // 1. Creamos la etiqueta de configuración (atOptions)
        var atOptionsScript = document.createElement('script');
        atOptionsScript.type = 'text/javascript';
        atOptionsScript.text = "atOptions = { 'key' : '28ea1e8bfb954e84af148468a2d3c686', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };";

        // 2. Creamos la etiqueta que llama al script externo de Adsterra
        var invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = 'https://fundingfashioned.com/28ea1e8bfb954e84af148468a2d3c686/invoke.js';

        // 3. Limpiamos el contenedor y añadimos la etiqueta de la etiqueta de publicidad y los scripts
        contenedor.innerHTML = '<span class="ad-label">Publicidad</span>';
        contenedor.appendChild(atOptionsScript);
        contenedor.appendChild(invokeScript);
    }

    // Ejecutamos la función para los contenedores que existan en la página
    insertarBannerAdsterra("ad-top-container");
    insertarBannerAdsterra("ad-video-container");
});
