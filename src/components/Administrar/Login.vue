<template>
  <div id="login">
    <div class="container">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-5">
          <div class="card">
            <nav style="background-color:black; height=15px; color:#fec400;">
                  <br>
                  <p class="h2 text-black">Login</p>
            </nav>
            <div class="card-body">
              <form @submit.prevent="login1()">
                <div class="form-group">
                  <input type="text"  v-model="usuario" class="form-control" placeholder="Ingrese Usuario">
                </div>
                <div class="form-group">
                  <input type="password"  v-model="password" class="form-control" placeholder="Ingrese Password">
                </div>
                 <button class="btn-block" style="background-color: black; color:#fec400; height:50px;">Ingresar</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </br>
  </div>
</template>

<script>

import axios from 'axios'
import {mapMutations} from 'vuex'

export default {
  created(){

  },
  data () {
    return {
      usuario: '',
      password: ''

		}
  },
  mounted(){

  },
  methods: {
    ...mapMutations([
      'cambiar',
      ]),
      login(){
          if (this.usuario == 'admin' &&  this.password =='1234'){
            this.$router.push('/Home');
          }
          else {
          this.$swal({
              type: 'error',
              title: 'Error',
              text: 'Usuario o Password Incorrecta',
            })
          }
      },
      login1() {
                if(this.usuario != "" && this.password != "") {
                    if(this.usuario ==  this.$parent.cuenta.usuario && this.password ==  this.$parent.cuenta.password) {
                        this.$emit("autenticado", true);
                        this.$store.commit('cambiar', true);
                        this.$router.push('/Home');

                    } else {
                      this.$swal({
                          type: 'error',
                          title: 'Error',
                          text: 'Usuario o Password Incorrecta',
                        })
                    }
                } else {
                  this.$swal({
                      type: 'error',
                      title: 'Error',
                      text: 'Ingrese Usuario y Password',
                    })
                }
            }

  }
}
</script>

<style>
/*
body{
  background-image: url('./TELNOVO.png');
  background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}
*/

#login {
  margin-top: 130px;
  text-align: center;
}


h1 {
color: blue;

}
span{
color: black;

}




</style>
