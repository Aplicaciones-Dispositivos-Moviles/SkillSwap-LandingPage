/* SkillSwap — idioma inicial y atributo lang (base en_US / es_419)
   - Si el usuario ya eligió idioma, se respeta.
   - Si no, se usa el primer idioma del navegador que sea español o inglés.
   - Por defecto: inglés. */
(function () {
  var SUPPORTED = ['en', 'es'];

  window.skillswapInitialLang = function () {
    try {
      var saved = localStorage.getItem('skillswap-lang');
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* almacenamiento bloqueado: se sigue con el idioma del navegador */ }

    var prefs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var l = String(prefs[i]).toLowerCase();
      if (l.indexOf('es') === 0) return 'es';
      if (l.indexOf('en') === 0) return 'en';
    }
    return 'en';
  };

  /* Valor del atributo <html lang> para cada idioma de la interfaz */
  window.skillswapHtmlLang = function (lang) {
    return lang === 'es' ? 'es-419' : 'en-US';
  };
})();
