<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          id="titulo"
          autocomplete="off"
          v-model.lazy="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <imagem-responsiva
          v-show="foto.url"
          :url="foto.url"
          :titulo="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao">
        </textarea>
      </div>

      <div class="centralizado">
        <meu-btn rotulo="GRAVAR" tipo="submit" />
        <router-link to="/"
          ><meu-btn rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import meuBtn from "../shared/botao/meuBtn.vue";
import Foto from "../../domain/foto/Foto"

export default {
  components: {
    ImagemResponsiva,
    meuBtn,
  },
  data() {
    return {
     foto: new Foto ()
    };
  },
  methods: {
    grava() {
      console.log("enviar dados para API");
      console.log(this.foto)

      this.foto = new Foto
      
    },
  },
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>