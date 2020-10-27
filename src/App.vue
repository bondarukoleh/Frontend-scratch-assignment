<template>
  <div id="app">
    <nav>
      <ul class="nav-links">
        <li class="link" v-for="destination in destinations" :key="destination.name">
          <router-link :to="{name: destination.name}">{{destination.name}}</router-link>
        </li>
      </ul>
    </nav>
    <router-view :key="$route.name"/>
  </div>
</template>

<script>
  export default {
    data() {
     return {
       destinations: [
         {route: '/challenge-1', name: 'Challenge1'},
         {route: '/challenge-2', name: 'Challenge2'},
         {route: '/challenge-3', name: 'Challenge3'},
       ]
     }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .nav-links {
    list-style: none;

    .link {
      display: inline-block;
      padding: .5rem;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
