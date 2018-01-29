<template>
  <!-- eslint-disable -->
  <div class="wrapper">
    <div class="level">
      <div class="level-right logout-btn">
        <router-link :to="{ name: 'Login' }">
          <button class="button is-link logout-color">
            Sair
            <span class="icon is-small logout"><i class="fa fa-sign-out-alt"></i></span>
          </button>
        </router-link>
      </div>
    </div>
    <form v-on:submit.prevent="submit(pesquisa)">
      <div class="field">
        <label class="label">Procurar...</label>
        <div class="control search-control">
          <div class="select">
            <select v-model="pesquisa">
              <option value="auto">Seguro Auto</option>
              <option value="residencia">Seguro Residencial</option>
              <option value="viagem">Seguro Viagem</option>
              <option value="score0_50">Score 0 - 50</option>
              <option value="score51_80">Score 50 - 80</option>
              <option value="score81_100">Score 80 - 100</option>
              <option value="Sul">Sul</option>
              <option value="Sudeste">Sudeste</option>
              <option value="Centro-Oeste">Centro-Oeste</option>
              <option value="Nordeste">Nordeste</option>
            </select>
          </div>
        </div>
        <button class="button search-button" type="submit">
            <span class="icon is-small color2"><i class="fas fa-search"></i></span>
        </button>
      </div>
    </form>

    <div class="level results">
      <strong class="level-left results-title">Resultados Totais</strong>
      <div class="level-right">
        <a class="level-item">
          <span class="icon is-small color2"><i class="fas fa-download"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small color2"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </div>

    <div class="advice" v-if="isValid">
      <small>Procure pelo seguro desejado para achar os perfis</small>
    </div>

    <div class="level boxes" v-if="auto">
      <div class="level-item box" v-for="pessoa in seguro_auto" :key="pessoa.id">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>
  <!--  -->
    <div class="level boxes" v-if="viagem">
      <div class="level-item box" v-for="pessoa in seguro_viagem" :key="pessoa.id">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>
  <!--  -->
    <div class="level boxes" v-if="residencia">
      <div class="level-item box" v-for="pessoa in seguro_residencia" :key="pessoa.id">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="firstScore">
      <div class="level-item box" v-for="pessoa in score0_50">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="secondScore">
      <div class="level-item box" v-for="pessoa in score51_80">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="thirdScore">
      <div class="level-item box" v-for="pessoa in score81_100">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="pesqSul">
      <div class="level-item box" v-for="pessoa in sul">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="pesqSudeste">
      <div class="level-item box" v-for="pessoa in sudeste">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="pesqNordeste">
      <div class="level-item box" v-for="pessoa in nordeste">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->

    <div class="level boxes" v-if="pesqCentro_Oeste">
      <div class="level-item box" v-for="pessoa in centro_oeste">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <div>
                <strong>{{pessoa.nome}}</strong> <small>{{pessoa.cidade}}</small>
                <br>
                {{pessoa.tipoSeguro}}
                <br>
                <div class="hide-infos">Email: <small>{{pessoa.email}}</small></div>
                <div class="hide-infos">Telefone: <small>{{pessoa.telefone}}</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
            <div class="level">
              <nav class="level icons star is-mobile">
                <div class="level-right">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-big color-star"><i class="fas fa-star"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!--  -->
    <div class="centered" v-if="auto || viagem || residencia">
      <div class="control control-btn">
        <button class="button is-link" type="submit">Ver mais</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  
  data () {
    return {
      msg: '',
      isValid: true,
      pesquisa: '',
      auto: false,
      residencia: false,
      viagem: false,
      regiao: false,
      firstScore: false,
      secondScore: false,
      thirdScore: false,
      score: '',
      score0_50: [],
      score51_80: [],
      score81_100: [],
      pesqSul: false,
      pesqSudeste: false,
      pesqNordeste: false,
      pesqCentro_Oeste: false,
      sul: [],
      sudeste: [],
      nordeste: [],
      centro_oeste: [],
      seguro_auto: [
        {
          id: 1,
          nome: 'Rodrigo Reis',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 100
        },
        {
          id: 2,
          nome: 'Eliana Pessoa',
          tipoSeguro: 'Automóvel',
          cidade: 'Matutina',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 3,
          nome: 'Fernando',
          tipoSeguro: 'Automóvel',
          cidade: 'Brasília',
          regiao: 'Centro-Oeste',
          estado: 'DF',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 4,
          nome: 'Luiz Mathias',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 4,
          nome: 'Dani Bah',
          tipoSeguro: 'Automóvel',
          cidade: 'Florianópolis',
          regiao: 'Sul', 
          estado: 'SC',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        }, 
        {
          id: 4,
          nome: '‎Helô Vicenti‎',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        }, 
        {
          id: 4,
          nome: 'Rafael Pio',
          tipoSeguro: 'Automóvel',
          cidade: '',
          regiao: '',
          estado: '',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 80
        },
        {
          id: 4,
          nome: 'Vinicius Panisson',
          tipoSeguro: 'Automóvel',
          cidade: '',
          estado: 'Rio Grande do Sul',
          regiao: 'Sul',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99 ',
          score: 80
        },
        {
          id: 4,
          nome: '‎Janaina Zuculo Volponi‎ ',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 93463 3699 ',
          telefoneHide: '(19) 93463xx xx99 ',
          score: 80
        },
        {
          id: 5,
          nome: 'Gilson Lima',
          tipoSeguro: 'Automóvel',
          cidade: 'Feira de Santana',
          estado: 'BA',
          regiao: 'Nordeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99 ',
          score: 80
        },
        {
          id: 6,
          nome: 'Adriano Lourenço',
          tipoSeguro: 'Automóvel',
          cidade: '',
          estado: '',
          regiao: '',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99 ',
          score: 80
        }, 
        {
          id: 7,
          nome: 'Newton Mendes Mesquita‎',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99 ',
          score: 80
        },
        {
          id: 9,
          nome: 'Sergio Edu',
          tipoSeguro: 'Automóvel',
          cidade: 'Rio de Janeiro',
          estado: 'RJ',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99 ',
          score: 80
        },
        {
          id: 9,
          nome: 'Cassiana Fagoti',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'caxxxxxxxi@xmail.com',
          telefone: '(19) 370xxx xx65',
          telefoneHide: '(19) 370xxx xx65',
          score: 80
        },
        {
          id: 9,
          nome: 'Ismael Siqueira',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99',
          score: 80
        }, 
        {
          id: 9,
          nome: 'Sylvia Iwasaki',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99',
          score: 80
        }, 
        {
          id: 7,
          nome: 'Alisson de Oliveira Santos',
          tipoSeguro: 'Automóvel',
          cidade: 'Curitiba',
          estado: 'Paraná',
          regiao: 'Sul',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99',
          score: 20,
        },
        {
          id: 8,
          nome: 'Wesley Gonçalves',
          tipoSeguro: 'Automóvel',
          cidade: 'Catalão',
          estado: 'Goiás',
          regiao: 'Centro-Oeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99',
          score: 20,
          
        },
        {
          id: 9,
          nome: 'Leandro Paiva dos Santos',
          tipoSeguro: 'Automóvel',
          cidade: 'Catalão',
          estado: 'SP',
          regiao: 'Sudeste',
          email: 'emaxxx@xxx.com',
          telefone: '(19) 934xx xx99',
          telefoneHide: '(19) 934xx xx99',
          score: 20
          
        },
        {
          id: 10,
          nome: 'Robson Pires',
          tipoSeguro: 'Automóvel',
          cidade: 'Osasco',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 20
        },
        {
          id: 11,
          nome: 'Gilson Lima',
          tipoSeguro: 'Automóvel',
          cidade: 'Feira de Santana',
          regiao: 'Nordeste',
          estado: 'BA',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 20
        }
      ],
      seguro_residencia: [
        {
          id: 1,
          nome: 'Cícero Ávila',
          tipoSeguro: 'Residencial',
          cidade: 'Fortaleza',
          regiao: 'Nordeste',
          estado: 'CE',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 100
        },
        {
          id: 2,
          nome: 'Wander Paiva',
          tipoSeguro: 'Residencial',
          cidade: 'Coronel Fabriciano',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 100
        },
        {
          id: 3,
          nome: 'Mariana Werner',
          tipoSeguro: 'Residencial',
          cidade: 'Florianópolis',
          regiao: 'Sul',
          estado: 'SC',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 4,
          nome: 'Uildesmar Italo',
          tipoSeguro: 'Residencial',
          cidade: 'Santos Dumont',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 5,
          nome: 'Rafael Barros',
          tipoSeguro: 'Residencial',
          cidade: 'Londrina',
          regiao: 'Sul',
          estado: 'PR',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 6,
          nome: 'Joana D`arc',
          tipoSeguro: 'Residencial',
          cidade: 'Rio de Janeiro',
          regiao: 'Sudeste',
          estado: 'RJ',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 7,
          nome: 'Kelen Grüdtner',
          tipoSeguro: 'Residencial',
          cidade: 'Florianópolis',
          regiao: 'Sul',
          estado: 'SC',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        }
      ],
      seguro_viagem: [
        {
          id: 8,
          nome: 'Andreza Andrade',
          tipoSeguro: 'Viagem',
          cidade: 'Brasília',
          regiao: 'Centro-Oeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 100
        },
        {
          id: 9,
          nome: 'Felipe Mendes',
          tipoSeguro: 'Viagem',
          cidade: 'Belo Horizonte',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 100
        },
        {
          id: 10,
          nome: 'Valter Rodrigues',
          tipoSeguro: 'Viagem',
          cidade: 'São Paulo',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 11,
          nome: 'Fernando Lima',
          tipoSeguro: 'Viagem',
          cidade: 'Rio de Janeiro',
          regiao: 'Sudeste',
          estado: 'RJ',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 12,
          nome: 'Larissa Abreu',
          tipoSeguro: 'Viagem',
          cidade: 'Belo Horizonte',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 13,
          nome: 'Uildesmar Italo',
          tipoSeguro: 'Viagem',
          cidade: 'Santos Dumont',
          regiao: 'Centro-Oeste',
          estado: 'MG',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 14,
          nome: 'Felipe Arruda',
          tipoSeguro: 'Viagem',
          cidade: 'Guarulhos',
          regiao: 'Sudeste',
          estado: 'SP',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 90
        },
        {
          id: 15,
          nome: 'Fabrício Conchon',
          tipoSeguro: 'Viagem',
          cidade: '',
          regiao: '',
          estado: '',
          email: 'emaxxx@xxx.com',
          telefone: '(51)9xxxx-5005',
          telefoneHide: '(51)9xxxx-5005',
          score: 80
        }
      ]
    }
  },

  methods: {

    calculateScore(min, max) {
      let scoreResult = []
      
      scoreResult = scoreResult.concat(this.seguro_auto, this.seguro_residencia, this.seguro_viagem)

      return scoreResult.filter((pessoa) => {
        return pessoa.score > min && pessoa.score <= max
      })
    },

    calculateRegion(reg) {
      let regioes = []
      
      regioes = regioes.concat(this.seguro_auto, this.seguro_residencia, this.seguro_viagem)

      return regioes.filter((pessoa) => {
        return pessoa.regiao == reg
      })
    },

    clear() {
      this.isValid = false
      this.auto = false
      this.residencia = false
      this.viagem = false
      this.pesqSul = false
      this.pesqSudeste = false
      this.pesqNordeste = false
      this.pesqCentro_Oeste = false
      this.firstScore = false
      this.secondScore = false
      this.thirdScore = false

      this.score0_50 = []
      this.score51_80 = []
      this.score81_100 = []

      this.sul = []
      this.sudeste = []
      this.centro_oeste = []
      this.nordeste = []
    },

    submit (pesquisa) {
      this.clear()

      if (pesquisa == 'auto') {
        this.auto = true

      } else if (pesquisa == 'residencia') {
        this.residencia = true

      } else if (pesquisa == 'viagem') {
        this.viagem = true
        
      } else if (pesquisa == "score0_50") {
        this.firstScore = true
        
        this.score0_50 = this.calculateScore(0, 50)
        
      } else if (pesquisa == "score51_80") {
        this.secondScore = true
        
        this.score51_80 = this.calculateScore(51, 80)

      } else if (pesquisa == "score81_100") {
        this.thirdScore = true

        this.score81_100 = this.calculateScore(81, 100)
      } else if (pesquisa == "Sul") {
        this.pesqSul = true

        this.sul = this.calculateRegion("Sul")
      } else if (pesquisa == "Sudeste") {
        this.pesqSudeste = true

        this.sudeste = this.calculateRegion("Sudeste")
      } else if (pesquisa == "Nordeste") {
        this.pesqNordeste = true

        this.nordeste = this.calculateRegion("Nordeste")
      } else if (pesquisa == "Centro-Oeste") {
        this.pesqCentro_Oeste = true

        this.centro_oeste = this.calculateRegion("Centro-Oeste")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 95vh;
  background: #fff;
  padding: 17px 80px 54px;
  box-shadow: 6px -5px 20px rgba(29, 29, 29, 0.30);
  color: rgba(80, 80, 80, 0.36);
  border-radius: 10px;

  @media (max-width: 1125px) {
    .boxes,
    .box {
      display: block;
    }
  }

  form {
    margin: 10px auto 70px;
    max-width: 100%;
  }

  .results-title {
    text-transform: uppercase;
    text-align: left;
  }

  .boxes {
    border-top: 1px solid #ccc;
    padding-top: 40px; 
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
  }

  .control {
    margin: 0 auto;
  }

  .button {
    background-color: hsl(171, 100%, 41%);
    transition: .4s ease;

    &:hover {
      background-color: hsl(171, 100%, 30%);
    }
  }

  .level:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .box {
    margin: 5px;
    max-width: 49%;
  }

  .level.icons {
    float: right;

    &.star {
      font-size: 20px;
    }
  }

  .select, 
  select {
    width: 100%;
  }

  .label {
    text-align: left;
    font-size: 1.7rem;
  }

  .control.has-icons-right .input {
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-color: #733dd5;
  }

  .hide-infos {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  .icon {
    color: #b9adf3;
  }

  .color2 {
    color: rgba(52, 52, 52, 0.43);
  }

  .color-star {
    color: #ffd83d;
  }

  .search-button {
    width: 9%;
  }

  .search-control {
    width: 90%;
    display: inline-block;
  }

  .centered > .control {
    text-align: center;
    margin-top: 50px;
    
    .button {
      font-weight: 800;
      font-size: 14px;
      letter-spacing: .5px;
    }
  }

  .advice {
    font-size: 25px;
    font-weight: 300;
    color: #ccc;
  }

  .logout-btn {
    width: 100%;
  }

  .logout {
    color: #fff;
    margin-left: 5px !important;
  }

  

  .logout-color {
    background: #54baea;
  }
}

.span {
  font-size: 13px;
  color: #5f5b67;
}
</style>
