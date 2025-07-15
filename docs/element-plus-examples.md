# Element Plus 组件示例

下面是一些 Element Plus 组件的使用示例：

## 按钮组件

```vue
<template>
  <div class="button-group">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
```

## 表单组件

```vue
<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="记住我">
      <el-checkbox v-model="form.remember"></el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('提交成功');
        } else {
          alert('请填写完整信息');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
}
</script>
```

## 卡片组件

```vue
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>卡片标题</span>
        <el-button type="primary" size="small">操作按钮</el-button>
      </div>
    </template>
    <div v-for="item in 4" :key="item" class="text-item">
      这是第 {{ item }} 条内容
    </div>
  </el-card>
</template>

<style scoped>
.box-card {
  width: 480px;
  margin-bottom: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-item {
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.text-item:last-child {
  border-bottom: none;
}
</style>
```

## 如何使用

1. 首先确保已经安装了 Element Plus：

```bash
npm install element-plus --save
```

2. 在 VitePress 配置文件中引入 Element Plus：

```ts
// docs/.vitepress/config.mts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    plugins: [
      ElementPlus()
    ]
  },
  // 其他配置...
})
```

3. 然后就可以在你的 Vue 组件中使用 Element Plus 组件了。