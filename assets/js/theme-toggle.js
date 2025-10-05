// Theme management with localStorage persistence and auto mode
(function() {
  const STORAGE_KEY = 'theme-preference';
  const THEME_ATTR = 'data-theme';

  // Get current system preference
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Get theme preference (light/dark/auto)
  function getThemePreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || 'auto';
  }

  // Get actual theme to apply (resolves 'auto' to light/dark)
  function getEffectiveTheme(preference) {
    if (preference === 'auto') {
      return getSystemTheme();
    }
    return preference;
  }

  // Apply theme to document
  function applyTheme(preference) {
    const effectiveTheme = getEffectiveTheme(preference);
    document.documentElement.setAttribute(THEME_ATTR, effectiveTheme);
    updateToggleButton(preference);
  }

  // Update button text/icon to show NEXT theme
  function updateToggleButton(preference) {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    // Button shows what you'll get if you click it
    const cycle = {
      auto: 'light',
      light: 'dark',
      dark: 'auto'
    };
    const nextTheme = cycle[preference];

    const display = {
      light: { icon: '☀️', text: 'Light' },
      dark: { icon: '🌙', text: 'Dark' },
      auto: { icon: '🔄', text: 'Auto' }
    };

    const info = display[nextTheme];
    button.textContent = `${info.icon} ${info.text}`;
    button.setAttribute('aria-label', `Current: ${preference}. Click for ${nextTheme} mode.`);
  }

  // Cycle through themes: auto → light → dark → auto
  function toggleTheme() {
    const current = getThemePreference();
    const cycle = {
      auto: 'light',
      light: 'dark',
      dark: 'auto'
    };
    const next = cycle[current];

    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getThemePreference();
    applyTheme(theme);

    // Attach toggle handler
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  }

  // Listen for system theme changes when in auto mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const preference = getThemePreference();
    if (preference === 'auto') {
      // Re-apply to update the effective theme
      applyTheme('auto');
    }
  });

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Prevent FOUC (Flash of Unstyled Content) by applying theme immediately
  applyTheme(getThemePreference());

  // Update copyright year
  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    const currentYear = new Date().getFullYear();
    copyrightEl.textContent = `© ${currentYear} Paullina Chacin. All rights reserved.`;
  }
})();
