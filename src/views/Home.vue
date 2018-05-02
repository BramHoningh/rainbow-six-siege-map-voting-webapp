<template>
<div class="home">
  <CodeBox />
  <NewBox />
</div>
</template>

<script>
// @ is an alias to /src
import CodeBox from '@/components/CodeBox'
import NewBox from '@/components/NewBox'

export default {
  name: 'home',
  components: {
    CodeBox,
    NewBox
  },
  data () {
    return {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 40px;
}
</style>

