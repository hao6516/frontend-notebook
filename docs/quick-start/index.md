---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)

const add = () => {
    count.value++
}
</script>

## Markdown Content

The count is: {{ count }}

<el-button type="primary" :class="$style.button" @click="add">Increment</el-button>




<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>