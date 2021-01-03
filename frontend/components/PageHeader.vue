<template>
  <v-parallax
    height="150"
    dark
    src="/bg.png"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 mb-4">
          {{ pagetitle }}
        </h1>
        <h4 class="subheading">
          {{ pagedesc }}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
export default {
  name: 'PageHeader',
  props: ['pagetitle', 'pagedesc']
}
</script>
