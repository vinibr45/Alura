<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre o seu titulo!"
    />

    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="foto in fotosComFiltro"
        :key="foto.titulo"
      >
        <new-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <meu-btn
            rotulo="remover"
            tipo="button"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </new-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import newPainel from "../shared/painel/newPainel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import meuBtn from "../shared/botao/meuBtn.vue";
export default {
  components: {
    newPainel,
    ImagemResponsiva,
    meuBtn,
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
    };
  },
  methods: {
    remove(foto) {
      alert("Remover a foto!" + foto.titulo);
    },
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise.then((res) => res.json()).then((fotos) => (this.fotos = fotos));
  },
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}
.filtro {
  display: block;
  width: 100%;
}
</style>
