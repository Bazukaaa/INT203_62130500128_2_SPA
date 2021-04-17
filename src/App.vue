<template>
  <div id="nav">
    <nav
      class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20"
    >
      <div>
        <h1>BUFFALO.LIST</h1>
      </div>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      
    </nav>
  </div>
  <router-view />
</template>
