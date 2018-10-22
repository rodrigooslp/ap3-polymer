import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/paper-item/paper-item.js'
import '@polymer/iron-ajax/iron-ajax.js'

/**
 * @customElement
 * @polymer
 */
class UserList extends PolymerElement {
  static get template() {
    return html`
      <style>
        paper-item {
          padding: 0.5rem;
          border: lightgray 1px solid;
          border-bottom: none;
        }
        paper-item:last-of-type {
          border: lightgray 1px solid;
        }
      </style>
      <iron-ajax
        auto
        id="dataAjax"
        url="http://paw.ic.ufmt.br/jivago/alunos-api/public/index.php/alunos"
        handle-as="json"
        last-response="{{alunos}}">
      </iron-ajax>

      <div role="listbox">
        <template is="dom-repeat" items="{{alunos}}">
          <paper-item>
            <paper-item-body two-line>
              <div>RGA: {{item.rga}}</div>
              <div>Nome: {{item.nome}}</div>
            </paper-item-body>
          </paper-item>
        </template>
      </div>
    `
  }
}

window.customElements.define('user-list', UserList)
