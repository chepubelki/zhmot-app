<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link :key="link.url" :to="link.url" active-class="active" v-for="link in links">
      <li>
        <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Счет", url: "/" },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>
