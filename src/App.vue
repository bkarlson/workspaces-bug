<template>
  <div>
    <latin/>
    <russian/>
  </div>
</template>

<script>
import latin from '@/components/us-ascii'
import russian from '@/components/unicode'
export default {
  components: {
    latin, 
    russian
  }
}
</script>
