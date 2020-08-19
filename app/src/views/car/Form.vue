<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10" lg="8">
        <v-form>
          <v-row>
            <v-col>
              <MyTextField v-model="carItem.brand" label="メーカー" />
              <MyTextField v-model="carItem.name" label="車名" />
              <MyTextField v-model="carItem.color" label="車色" />
              <MyTextField v-model="carItem.image" label="イメージ" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right py-0">
              <MyButton @click="$router.push('/car/')">登録</MyButton>
              <MyButton color="secondary" @click="$router.push('/car/')">
                戻る
              </MyButton>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import { CarItem } from "@/types/car";

export default defineComponent({
  setup() {
    let carItem = reactive<Partial<CarItem>>({});
    // prettier-ignore
    carItem = { id: 2, brand: "NISSAN", name: "NOTE e-POWER X Vセレクション", color: "yellow", image: "/images/cars/01.svg" };

    return {
      carItem,
    };
  },
});
</script>
