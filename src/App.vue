<template>
  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark">
                <h3 style="color: black; background-color:#fec400; ;"> TELNOVO </h3>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/HomeCliente">Clientes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/HomeProducto">Productos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/HomeVenta">Ventas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/HomeArreglo">Arreglos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/HomeProovedor">Proveedores</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="autenticado"  tag="li" class-active="active"   to="/Login" v-on:click.native="logout()" replace>Salir</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        <router-view @autenticado="setAutenticado" ></router-view>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
  name: 'app',
  created(){
    this.$router.push('/Login');
  },
  data () {
    return {
      autenticado: false,
      cuenta: {
                    usuario: "admin",
                    password: "1234"
              }
    }
  },
  mounted(){

  },
  methods: {
    setAutenticado(status) {
               this.autenticado = status;
    },
    logout(){
        this.autenticado = false;
        mapMutations(['cambiar']);
        this.$router.go('/Login');
  }
}


}
</script>

<style>
body{
  background-image: url('background.png');
  background-repeat: no-repeat;
 background-attachment: fixed;
 background-position: center;
  color: white;
}

.navbar{background:#222222;}
.nav-item::after{content:'';display:block;width:0px;height:2px;background:#fec400;transition: 0.2s;}
.nav-item:hover::after{width:100%;}
.nav-link{padding:15px 5px;transition:0.2s;}


 nav li.router-link-active {
   background-color: #fec400;
   color: black;
   height: 193%;
 }



 nav li{
   color: white;

 }

 nav{
   height: 75px;
 }


</style>
