<template>
  <div class="wrapper">
    <form v-on:submit.prevent="submit(pesquisa)">
      <div class="field">
        <label class="label">Procurar...</label>
        <div class="control search-control">
          <div class="select">
            <select v-model="pesquisa">
              <option value="auto">Seguro Auto</option>
              <option value="residencia">Seguro Residencial</option>
              <option value="viagem">Seguro Viagem</option>
              <option value="score">Pontuações altas</option>
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
                <div class="hide-infos">Email: <small>emaxxx@xxx.com</small></div>
                <div class="hide-infos">Telefone: <small>(51)9xxxx-5005</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                </a>
                <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                </a>
                <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
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
                <div class="hide-infos">Email: <small>emaxxx@xxx.com</small></div>
                <div class="hide-infos">Telefone: <small>(51)9xxxx-5005</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
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
                <div class="hide-infos">Email: <small>emaxxx@xxx.com</small></div>
                <div class="hide-infos">Telefone: <small>(51)9xxxx-5005</small></div>
              </div>
            </div>
            <nav class="level icons is-mobile">
              <div class="level-right">
                <a class="level-item">
                  <a class="level-item" v-if="pessoa.score >= 0 && pessoa.score <= 50">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 50  && pessoa.score <= 80">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                  <a class="level-item" v-if="pessoa.score > 80  && pessoa.score <= 100">
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                    <span class="icon is-small color-star"><i class="fas fa-star"></i></span>
                  </a>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-download"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
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
      score: false,
      dadosUsuario: {
        user: '',
        pass: ''
      },
      seguro_auto: [
        {
          id: 1,
          nome: 'Alisson de Oliveira Santos',
          tipoSeguro: 'Automóvel',
          cidade: 'Curitiba - PR',
          score: 20
        },
        {
          id: 2,
          nome: 'Wesley Gonçalves',
          tipoSeguro: 'Automóvel',
          cidade: 'Catalão - GO',
          score: 20
        },
        {
          id: 3,
          nome: 'Leandro Paiva dos Santos',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo - SP',
          score: 20
        },
        {
          id: 4,
          nome: 'Robson Pires',
          tipoSeguro: 'Automóvel',
          cidade: 'Osasco - SP',
          score: 20
        },
        {
          id: 5,
          nome: 'Rodrigo Reis',
          tipoSeguro: 'Automóvel',
          cidade: 'São Paulo - SP',
          score: 100
        },
        {
          id: 6,
          nome: 'Fernando',
          tipoSeguro: 'Automóvel',
          cidade: 'Brasília - DF',
          score: 90
        },
        {
          id: 7,
          nome: 'Rafael Pio',
          tipoSeguro: 'Automóvel',
          cidade: '',
          score: 80
        },
        {
          id: 8,
          nome: 'Gilson Lima',
          tipoSeguro: 'Automóvel',
          cidade: 'Feira de Santana - Bahia',
          score: 20
        },
        {
          id: 9,
          nome: 'Gilson Lima',
          tipoSeguro: 'Automóvel',
          cidade: 'Feira de Santana - Bahia',
          score: 80
        },
        {
          id: 10,
          nome: 'Adriano Lourenço',
          tipoSeguro: 'Automóvel',
          cidade: '',
          score: 80
        },
        {
          id: 11,
          nome: 'Eliana Pessoa',
          tipoSeguro: 'Automóvel',
          cidade: 'Matutina - MG',
          score: 90
        }
      ],
      seguro_residencia: [
        {
          id: 1,
          nome: 'Uildesmar Italo',
          tipoSeguro: 'Residencial',
          cidade: 'Santos Dumont - MG',
          score: 90
        },
        {
          id: 2,
          nome: 'Cícero Ávila',
          tipoSeguro: 'Residencial',
          cidade: 'Fortaleza - CE',
          score: 100
        },
        {
          id: 3,
          nome: 'Mariana Werner',
          tipoSeguro: 'Residencial',
          cidade: 'Florianópolis - SC',
          score: 90
        },
        {
          id: 4,
          nome: 'Wander Paiva',
          tipoSeguro: 'Residencial',
          cidade: 'Coronel Fabriciano - MG',
          score: 100
        },
        {
          id: 5,
          nome: 'Rafael Barros',
          tipoSeguro: 'Residencial',
          cidade: 'Londrina - PR',
          score: 90
        },
        {
          id: 6,
          nome: 'Joana D`arc',
          tipoSeguro: 'Residencial',
          cidade: 'Rio de Janeiro - RJ',
          score: 90
        },
        {
          id: 7,
          nome: 'Kelen Grüdtner',
          tipoSeguro: 'Residencial',
          cidade: 'Florianópolis - SC',
          score: 90
        },
      ],
      seguro_viagem: [
        {
          id: 8,
          nome: 'Uildesmar Italo',
          tipoSeguro: 'Viagem',
          cidade: 'Santos Dumont - MG',
          score: 90
        },
        {
          id: 9,
          nome: 'Felipe Arruda',
          tipoSeguro: 'Viagem',
          cidade: 'Guarulhos - SP',
          score: 90
        },
        {
          id: 10,
          nome: 'Fabrício Conchon',
          tipoSeguro: 'Viagem',
          cidade: '',
          score: 80
        },
        {
          id: 11,
          nome: 'Valter Rodrigues',
          tipoSeguro: 'Viagem',
          cidade: 'São Paulo - SP',
          score: 90
        },
        {
          id: 12,
          nome: 'Fernando Lima',
          tipoSeguro: 'Viagem',
          cidade: 'Rio de Janeiro - RJ',
          score: 90
        },
        {
          id: 13,
          nome: 'Andreza Andrade',
          tipoSeguro: 'Viagem',
          cidade: 'Brasília - DF',
          score: 100
        },
        {
          id: 14,
          nome: 'Felipe Mendes',
          tipoSeguro: 'Viagem',
          cidade: 'Belo Horizonte - MG',
          score: 100
        },
        {
          id: 15,
          nome: 'Larissa Abreu',
          tipoSeguro: 'Viagem',
          cidade: 'Belo Horizonte - MG',
          score: 90
        },
      ]
    }
  },

  methods: {
    submit (pesquisa) {
      this.isValid = false
      if (pesquisa == 'auto') {
        this.auto = true
        this.residencia = false
        this.viagem = false
      } else if (pesquisa == 'residencia') {
        this.residencia = true
        this.auto = false
        this.viagem = false
      } else if (pesquisa == 'viagem') {
        this.viagem = true
        this.auto = false
        this.residencia = false
      } else if (pesquisa == 'score') {
        this.score = true
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
}

.span {
  font-size: 13px;
  color: #5f5b67;
}
</style>
