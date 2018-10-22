import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-styles/element-styles/paper-material-styles.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js'
import './user-list'
import './user-create'

/**
 * @customElement
 * @polymer
 */
class Ap3App extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style" include="paper-material-styles">
        #list {
          max-height: 400px;
          overflow-y: scroll;
        }

        paper-button {
          background: aliceblue;
        }
      </style>
      <h4>Cadastro</h4>
      <div>
        <user-create></user-create>
      </div>
      <h4>Alunos</h4>
      <div id="list">
        <user-list></user-list>
      </div>
    `
  }
}

window.customElements.define('ap3-app', Ap3App)
