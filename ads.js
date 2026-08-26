// Archivo: ads.js
document.addEventListener("DOMContentLoaded", function() {
    
    // Código HTML exacto que te dio Adsterra para el banner
    var adCode = `
        <span class="ad-label">Publicidad</span>
        <script type="text/javascript">
            atOptions = {
                'key' : '28ea1e8bfb954e84af148468a2d3c686',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="https://fundingfashioned.com/28ea1e8bfb954e84af148468a2d3c686/invoke.js"></script>
    `;

    // Inyectamos en el banner superior si existe
    var topAd = document.getElementById("ad-top-container");
    if (topAd) {
        topAd.innerHTML = adCode;
    }

    // Inyectamos en el banner del video si existe
    var videoAd = document.getElementById("ad-video-container");
    if (videoAd) {
        videoAd.innerHTML = adCode;
    }
});
