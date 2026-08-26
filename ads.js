// Archivo: ads.js - Inyector automático de publicidad de Adsterra

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Banner superior (para el index o cabeceras)
    var topAd = document.getElementById("ad-top-container");
    if (topAd) {
        topAd.innerHTML = `
            <span class="ad-label">Publicidad</span>
            <!-- PEGA AQUÍ TU SCRIPT EXACTO DE ADSTERRA -->
            <script type="text/javascript">
                // Tu código de Adsterra va aquí adentro
            </script>
        `;
    }

    // 2. Banner antes del reproductor (para los capítulos)
    var videoAd = document.getElementById("ad-video-container");
    if (videoAd) {
        videoAd.innerHTML = `
            <span class="ad-label">Publicidad</span>
            <!-- PEGA AQUÍ TU SCRIPT EXACTO DE ADSTERRA -->
            <script type="text/javascript">
                // Tu código de Adsterra va aquí adentro
            </script>
        `;
    }
});
