import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/iron-ajax/iron-ajax.js'

/**
 * @customElement
 * @polymer
 */
class UserCreate extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        paper-button {
          background: aliceblue;
        }
      </style>
      <iron-ajax
        id="dataAjax"
        url="http://paw.ic.ufmt.br/jivago/alunos-api/public/index.php/alunos"
        content-type="application/json"
        body={{options}}
        handle-as="json"
        method="post">
      </iron-ajax>
      <paper-input always-float-label label="Nome" value="{{nome}}"></paper-input>
      <paper-input always-float-label label="RGA" value="{{rga}}"></paper-input>
      <paper-button on-tap="saveUser">Salvar</paper-button>
    `
  }

  static get properties () {
    return {
      options: {
        computed: 'computeOptions(nome, rga)'
      }
    }
  }

  computeOptions (nome, rga) {
    return { nome: nome, rga: rga }
  }

  saveUser () {
    this.$.dataAjax.generateRequest()
  }
}

window.customElements.define('user-create', UserCreate)
