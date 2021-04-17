<template>
  <div class="min-h-screen flex items-center justify-center px-4 bg-white">
    <div class="max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
      <span class="font-mono text-sm">Date: {{ contact.date }}</span>
      <button @click="deleteData(contact.id)" class="ml-auto">
        <i class="material-icons">delete</i>
      </button>
    </div>
    
  </div>
</template>
<script>
export default {
    props:{
        contact:Object,
    },
    methods: {
        deleteData(){
            this.$emit('click-delete', this.contact.id)
        }
    },
}
</script>
