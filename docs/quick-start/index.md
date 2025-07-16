---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
const dialogVisible = ref(false)
const add = () => {
    count.value++
    dialogVisible.value = true
}
</script>

## Markdown Content

The count is: {{ count }}

<el-button type="primary" :class="$style.button" @click="add">Increment</el-button>
<el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>




<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>