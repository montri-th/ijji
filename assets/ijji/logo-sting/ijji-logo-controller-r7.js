/* Artifact-local controller for the ijji 1.2.1 animated-identity overlay.
   The exact PNG fallback stays visible until the runtime and all nine layers are ready. */
(function () {
  'use strict';

  var runtimePromise = null;
  var layerFiles = [
    'i-1.png', 'jj.png', 'i-2.png',
    'tag-1-1.png', 'tag-1-2.png', 'tag-1-3.png',
    'tag-2-1.png', 'tag-2-2.png', 'tag-2-3.png'
  ];

  function loadRuntime(runtimeUrl) {
    if (window.customElements && customElements.get('ijji-logo-sting')) return Promise.resolve();
    if (runtimePromise) return runtimePromise;
    runtimePromise = new Promise(function (resolve, reject) {
      var script = document.querySelector('script[data-ijji-logo-runtime]');
      if (!script) {
        script = document.createElement('script');
        script.src = runtimeUrl;
        script.defer = true;
        script.setAttribute('data-ijji-logo-runtime', '1.2.1');
        document.head.appendChild(script);
      }
      var timer = window.setTimeout(function () { reject(new Error('ijji logo runtime timed out')); }, 8000);
      var done = function () {
        customElements.whenDefined('ijji-logo-sting').then(function () {
          window.clearTimeout(timer);
          resolve();
        }, reject);
      };
      script.addEventListener('load', done, { once: true });
      script.addEventListener('error', function () {
        window.clearTimeout(timer);
        reject(new Error('ijji logo runtime failed to load'));
      }, { once: true });
      if (customElements.get('ijji-logo-sting')) done();
    });
    return runtimePromise;
  }

  function preloadLayers(layerBase) {
    return Promise.all(layerFiles.map(function (file) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = function () { reject(new Error('ijji logo layer failed: ' + file)); };
        image.src = layerBase + file;
      });
    }));
  }

  function mount(root) {
    if (!root || !window.customElements || !customElements.whenDefined) return null;
    var stage = root.querySelector('[data-ijji-logo-stage]');
    var wrap = stage && stage.closest('[data-ijji-logo-wrap]');
    var art = stage && stage.querySelector('[data-ijji-logo-art]');
    var logo = art && art.querySelector('ijji-logo-sting');
    var control = wrap && wrap.querySelector('[data-ijji-logo-control]');
    var icon = control && control.querySelector('[data-ijji-logo-icon]');
    var labelNode = control && control.querySelector('[data-ijji-logo-label]');
    if (!stage || !wrap || !art || !logo || !control || !icon || !labelNode) return null;

    var reduced = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var layerBase = new URL('./assets/ijji/logo-sting/layers/', document.baseURI).href;
    var runtimeUrl = new URL('./assets/ijji/logo-sting/ijji-logo-sting.js?v=1.2.1', document.baseURI).href;
    var canObserve = 'IntersectionObserver' in window;
    var ready = false;
    var visible = false;
    var autoPlayed = false;
    var destroyed = false;
    var preparation = null;

    function setControl(state) {
      var hidden = state === 'fallback' || state === 'preparing' || Boolean(reduced && reduced.matches);
      control.hidden = hidden;
      if (hidden) return;
      var label;
      if (state === 'running') {
        label = control.dataset.pauseLabel;
        icon.textContent = 'pause';
      } else if (state === 'paused') {
        label = control.dataset.resumeLabel;
        icon.textContent = 'play_arrow';
      } else {
        label = control.dataset.replayLabel;
        icon.textContent = 'replay';
      }
      control.removeAttribute('aria-pressed');
      control.setAttribute('aria-label', label);
      control.title = label;
      labelNode.textContent = label;
    }

    function showFallback() {
      logo.pause && logo.pause();
      art.classList.remove('is-enhanced');
      stage.dataset.motionState = 'fallback';
      setControl('fallback');
    }

    function showFinal() {
      if (!ready) return showFallback();
      logo.finish && logo.finish();
      art.classList.add('is-enhanced');
      stage.dataset.motionState = 'final';
      setControl('final');
    }

    function play(userInitiated) {
      if (!ready || destroyed || (reduced && reduced.matches) || document.visibilityState !== 'visible') return;
      if (!visible && !userInitiated) return;
      if (autoPlayed && !userInitiated) return;
      autoPlayed = true;
      logo.replay && logo.replay();
      window.requestAnimationFrame(function () {
        if (destroyed || stage.dataset.motionState !== 'running') return;
        if (reduced && reduced.matches) return showFallback();
        if (!visible || document.visibilityState !== 'visible') return showFinal();
        if (destroyed || !logo.shadowRoot || !logo.shadowRoot.querySelector('svg') || logo.shadowRoot.querySelectorAll('image').length !== 9) return showFallback();
        art.classList.add('is-enhanced');
        stage.dataset.motionState = 'running';
        setControl('running');
      });
    }

    function activateIfEligible() {
      if (destroyed || !canObserve || autoPlayed || !visible || document.visibilityState !== 'visible' || (reduced && reduced.matches)) return;
      if (ready) play(false);
      else prepare();
    }

    function prepare() {
      if (preparation || destroyed || (reduced && reduced.matches)) return preparation;
      stage.dataset.motionState = 'preparing';
      setControl('preparing');
      preparation = Promise.all([loadRuntime(runtimeUrl), preloadLayers(layerBase)]).then(function () {
        if (destroyed) return;
        if (!logo.shadowRoot || !logo.shadowRoot.querySelector('svg') || logo.shadowRoot.querySelectorAll('image').length !== 9) throw new Error('ijji logo runtime did not render all layers');
        ready = true;
        activateIfEligible();
      }).catch(function () {
        if (!destroyed) showFallback();
      });
      return preparation;
    }

    function onStart() {
      stage.dataset.motionState = 'running';
      if (art.classList.contains('is-enhanced')) setControl('running');
    }

    function onEnd() {
      stage.dataset.motionState = 'final';
      setControl('final');
    }

    function onControl() {
      var state = stage.dataset.motionState;
      if (state === 'running') {
        logo.pause && logo.pause();
        stage.dataset.motionState = 'paused';
        setControl('paused');
      } else if (state === 'paused') {
        logo.play && logo.play();
      } else {
        play(true);
      }
    }

    function onVisibility() {
      if (document.visibilityState !== 'visible') {
        if (stage.dataset.motionState === 'running' || stage.dataset.motionState === 'paused') showFinal();
      } else activateIfEligible();
    }

    function onPageHide() {
      if (stage.dataset.motionState === 'running' || stage.dataset.motionState === 'paused') showFinal();
    }

    function onPageShow() {
      activateIfEligible();
    }

    function onReducedMotion() {
      if (!canObserve) return showFallback();
      if (reduced && reduced.matches) {
        showFallback();
      } else if (ready) {
        if (autoPlayed) showFinal();
        else activateIfEligible();
      } else {
        prepare();
      }
    }

    logo.addEventListener('ijji-sting-start', onStart);
    logo.addEventListener('ijji-sting-end', onEnd);
    control.addEventListener('click', onControl);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    if (reduced && reduced.addEventListener) reduced.addEventListener('change', onReducedMotion);
    else if (reduced) reduced.addListener(onReducedMotion);

    var observer = canObserve ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.14;
        if (!visible && (stage.dataset.motionState === 'running' || stage.dataset.motionState === 'paused')) showFinal();
        else if (visible) activateIfEligible();
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -12% 0px' }) : null;
    if (observer) observer.observe(stage);

    var keepFallback = !canObserve || Boolean(reduced && reduced.matches);
    stage.dataset.motionState = keepFallback ? 'fallback' : 'preparing';
    setControl(keepFallback ? 'fallback' : 'preparing');
    if (!keepFallback) prepare();

    return {
      destroy: function () {
        destroyed = true;
        logo.pause && logo.pause();
        if (observer) observer.disconnect();
        logo.removeEventListener('ijji-sting-start', onStart);
        logo.removeEventListener('ijji-sting-end', onEnd);
        control.removeEventListener('click', onControl);
        document.removeEventListener('visibilitychange', onVisibility);
        window.removeEventListener('pagehide', onPageHide);
        window.removeEventListener('pageshow', onPageShow);
        if (reduced && reduced.removeEventListener) reduced.removeEventListener('change', onReducedMotion);
        else if (reduced) reduced.removeListener(onReducedMotion);
      }
    };
  }

  window.IjjiHeroLogo = { mount: mount };
}());
