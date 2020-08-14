<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10" lg="8">
        <v-virtual-scroll :items="cars" bench="10" item-height="80">
          <template v-slot="{ index, item }">
            <v-divider v-if="index > 0" />

            <v-list-item>
              <v-list-item-avatar size="60">
                <v-img :src="require('@/assets' + item.image)" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.brand }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ item.name }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon small>
                  <v-icon color="primary">
                    mdi-pencil-outline
                  </v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon color="secondary">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  setup() {
    // prettier-ignore
    const store = reactive({
      cars: [
        { id: 1, brand: "TOYOTA", name: "PRIUS Aプレミアム", color: "red", image: "/images/cars/04.svg" },
        { id: 2, brand: "NISSAN", name: "NOTE e-POWER X Vセレクション", color: "yellow", image: "/images/cars/01.svg" },
        { id: 3, brand: "HONDA", name: "CR-V e:HEV EX", color: "white", image: "/images/cars/00.svg" },
        { id: 4, brand: "MAZDA", name: "MAZDA 3 FASTBACK", color: "red", image: "/images/cars/11.svg" },
        { id: 5, brand: "SUBARU", name: "IMPREZA 2.0i-L EyeSight", color: "light-blue", image: "/images/cars/06.svg" },
      ]
    });

    return toRefs(store);
  }
});
</script>
