import './style.scss';
import template from './markup.html?raw';

if (!customElements.get('es-header')) {
  customElements.define(
    'es-header',
    class ESHeader extends HTMLElement {
      connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const html = template.replace('{{ title }}', title);

        this.innerHTML = html;
      }
    }
  );
}
