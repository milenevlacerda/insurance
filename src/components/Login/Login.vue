<template class="columns is-desktop is-vcentered">
  <div class="wrapper">
    <span class="span">Bem vindo ao</span>
    <h1>Insurance Robot</h1>
    <img src="../../assets/insurance.png">
    <form v-on:submit.prevent="submit(dadosUsuario)">
      <div class="field">
        <label class="label">Usuário</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" v-model="dadosUsuario.user" placeholder="insurance" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Senha</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" v-model="dadosUsuario.pass" type="password" placeholder="****" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">Entrar</button>
        </div>
      </div>

      <span>{{msg}}</span>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import router from '../../router'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  
  data () {
    return {
      msg: '',
      isValid: '',
      dadosUsuario: {
        user: '',
        pass: ''
      }
    }
  },

  methods: {
    submit (dadosUsuario) {
      if ( dadosUsuario.user == 'admin' & dadosUsuario.pass == 'admin') {
        router.push({ path: '/home' })
      } else {
        this.msg = 'usuário ou senha incorretos, Tente novamente!'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 800;
  font-size: 40px;
  color: #5f5b67;
} 

img {
  width: 150px;
}

a {
  color: #42b983;
}

.wrapper {
  max-width: 650px;
  margin: 0 auto;
  background: #fff;
  padding: 37px 80px 54px;
  box-shadow: 6px -5px 20px rgba(29, 29, 29, 0.30);
  color: rgba(80, 80, 80, 0.36);
  border-radius: 10px;

  form {
    margin: 60px auto 0;
    max-width: 70%;
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

  .label {
    text-align: left;
  }

  .control.has-icons-right .input {
    border-color: #733dd5;
  }
}

.span {
  font-size: 13px;
  color: #5f5b67;
}
</style>
