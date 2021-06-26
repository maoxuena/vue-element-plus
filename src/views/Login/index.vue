<template>
  <div class="login-page">
    <h4 class="title">{{ title }}</h4>
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="validateForm"
      label-width="3em"
      class="login-form"
      hide-required-asterisk
    >
      <el-form-item prop="username" label="账号">
        <el-input
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        ></el-input>
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item class="login-form-button">
        <el-button class="submit-button" type="primary" @click="submit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref, unref, toRef, watch } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
// import router from '@/router'
export default {
  name: 'Login',
  setup () {
    const passwordType = ref('password')
    const store = useStore()
    console.log(store)
    // mapState
    // const { str, arr, obj } = toRefs(store.state)
    // const num = toRef(store.state, 'num')
    // mapGetters
    const title = toRef(store.getters, 'settings/title')
    const logo = toRef(store.getters, 'settings/logo')
    // mapMutations(toRefs也可以)
    // const strMutation = toRef(store._mutations, 'strMutation')
    // mapActions
    // const login = toRef(store._actions, 'user/login')
    const { 'user/login': [login] } = store._actions
    const redirect = ref(null)
    const router = useRouter()
    const route = useRoute()
    console.log(route)
    redirect.value = route.query?.redirect || '/'

    const validateForm = ref(null)
    let loginForm = reactive({
      username: 'admin',
      password: '123456'
    })

    const rules = {
      username: [
        { required: true, message: '用户名称不能为空', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
      ]
    }

    const handleRoute = () => {
      return redirect.value === '/404' || redirect.value === '/403'
        ? '/'
        : redirect.value
    }

    const showPwd = () => {
      passwordType.value = passwordType.value === 'password' ? '' : 'password'
    }

    const submit = async () => {
      const form = unref(validateForm)
      if (!form) {
        return
      }
      await form.validate()
      await login(loginForm)
      await router.push(handleRoute())
    }

    watch(() => route.query, (nextValue, prevValue) => {
      console.log("watch", nextValue, prevValue);
    })

    // 导航守卫 监听路由变化
    onBeforeRouteUpdate(to => {
      console.log(to, "=====")
    })

    return {
      passwordType,
      showPwd,
      loginForm,
      rules,
      validateForm,
      submit,
      title,
      logo
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  .title {
    text-align: center;
  }

  .login-form {
    width: 370px;
    margin: 0 auto;
    border: 1px solid #efefef;
    border-radius: 10px;
    padding: 35px;
    
    .show-pwd{
      position: absolute;
      right: 10px;
      cursor: pointer;
      color: #C0C4CC;
    }

    .login-form-button {
      .submit-button {
        width: 100%;
      }
    }
  }
}
</style>