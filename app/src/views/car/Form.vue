<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10" lg="8">
        <v-form>
          <v-row>
            <v-col>
              <MyTextField label="メーカー" />
              <MyTextField label="車名" />
              <MyTextField label="車色" />
              <MyTextField label="イメージ" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right py-0">
              <MyButton color="primary">登録</MyButton>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
