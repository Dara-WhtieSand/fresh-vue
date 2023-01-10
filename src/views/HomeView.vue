<script setup>
import AddButton from '../components/buttons/AddButton.vue';


function handleClick() {
  console.log("hello");
}
</script>

<template>
  <main>
    <AddButton />
    <!-- <a-button type="primary" @click="handleEdit()">
      <template #icon>
        <plus-outlined />
      </template>
      新建
    </a-button> -->
  </main>
</template>
