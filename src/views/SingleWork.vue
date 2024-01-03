<template>
  <main>{{ data }}</main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePrismicDocumentByUID } from '@prismicio/vue'
const route = useRoute()

const data = usePrismicDocumentByUID('portfolio_item', route.params.uid)
</script>