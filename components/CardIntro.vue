<template>
  <div class="max-w-full max-h-full my-8 p-12 rounded overflow-hidden shadow-lg text-center	">
    <div class="my-8">
      <Logo/>
    </div>
    <p class="my-8 leading-normal">
      フロントの勉強に作成したアプリ<br>
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>