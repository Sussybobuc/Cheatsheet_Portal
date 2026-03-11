/* KaTeX dynamic loader for MAE cheatsheets
   Injects KaTeX CSS + JS from CDN, then auto-renders all math delimiters.
   Delimiters: $$...$$ for display, $...$ for inline */
(function(){
  var BASE = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/';

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = BASE + 'katex.min.css';
  document.head.appendChild(link);

  function loadScript(src, cb){
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.onerror = function(){ console.warn('KaTeX failed to load:', src); };
    document.head.appendChild(s);
  }

  loadScript(BASE + 'katex.min.js', function(){
    loadScript(BASE + 'contrib/auto-render.min.js', function(){
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$',  right: '$',  display: false}
        ],
        throwOnError: false,
        errorColor: '#cc0000'
      });
    });
  });
})();
