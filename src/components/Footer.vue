<template>
  <div class="footer">
    <div class="deck">
      <Icon 
        :filename="'github.png'"
        :url="'https://github.com/di3goCS'"
        :altText="'Ícone do Github'"
      />
      <Icon 
        :filename="'linkedin.png'"
        :url="'https://www.linkedin.com/in/di3gocs'"
        :altText="'Silhueta preta de  Ícone do Linkedn'"
      />
      <Icon 
        :filename="'twitter.png'"
        :url="'https://twitter.com/di3goCS'"
        :altText="'Silhueta preta de Ícone do Twitter'"
      />
      <Icon 
        :filename="'spotify.png'"
        :url="'https://open.spotify.com/user/gv347af796lak2b9co5lyiy7v?si=PlERdVa4TDumbwbuc2-dHQ'"
        :altText="'Silhueta preta de Ícone do Spotify'"
      />
      <Icon 
        :filename="'lastfm.png'"
        :url="'https://www.last.fm/pt/user/herocrafting'"
        :altText="'Silhueta preta de Ícone do Last.fm'"
      />
    </div>
    <div>
      <p> Feito com 💚 por Diego Silva </p>
      <p> Ícones fornecidos por <a rel="noopener noreferrer" href="https://icon54.com/" title="Pixel perfect"> Pixel perfect</a>, 
        <a rel="noopener noreferrer" href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> e
        <a rel="noopener noreferrer" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>.
      </p>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Footer',
  components: {Icon},
}
</script>

<style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--secondary-color);
    font-weight: 300;
    height: 20vh;
    width: 100%;
  }

  .footer p {
    margin: 10px 0;
  }

  .deck {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top: 8px;
  }

  a {
    background-color: var(--thirdy-color);
    text-decoration: none;
    font-weight: bold;
  }
</style>
