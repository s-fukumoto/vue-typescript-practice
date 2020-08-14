<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app clipped fixed>
      <v-list>
        <v-list-item-group color="light-green">
          <v-list-item
            v-for="item in navItems"
            :key="item.title"
            :to="item.path"
            router
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left fixed color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <AnimationIcon class="float-left" />
        <span class="text-h4 font-weight-bold ml-2">
          Vue TypeScript Practice
        </span>
      </v-toolbar-title>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
import AnimationIcon from "@/components/AnimationIcon.vue";

export default defineComponent({
  name: "AppToolBar",
  components: {
    AnimationIcon
  },
  setup() {
    const store = reactive({
      drawer: null, // 開閉On/Off
      navItems: [
        { title: "Home", icon: "mdi-home", path: "/" },
        { title: "Car", icon: "mdi-car", path: "/car/" },
        { title: "About", icon: "mdi-help-box", path: "/about/" }
      ]
    });

    return toRefs(store);
  }
});
</script>
