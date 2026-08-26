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
<script>
  atOptions = {
    'key' : '28ea1e8bfb954e84af148468a2d3c686',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://fundingfashioned.com/28ea1e8bfb954e84af148468a2d3c686/invoke.js"></script>

                
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

                <script>
  atOptions = {
    'key' : '28ea1e8bfb954e84af148468a2d3c686',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://fundingfashioned.com/28ea1e8bfb954e84af148468a2d3c686/invoke.js"></script>

            </script>
        `;
    }
});
