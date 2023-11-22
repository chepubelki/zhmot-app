<template>
  <nav class="navbar blue lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="barIsOpen">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text time">{{ formatTime(date) }} |</span> 
        <span class="black-text date"> {{ formatDate(date) }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
  },
  methods: {
    barIsOpen() {
      this.$emit("openClose", !this.$props.value);
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push("/login?message=logout");
    },
    formatTime(date) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');

      return `${hours}:${minutes}:${seconds}`;
    },
    formatDate(date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
};
</script>