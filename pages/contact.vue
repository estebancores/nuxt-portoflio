<template>
  <Card>
    <template slot="card-content">
      <div style="display: flex; justify-content: center">
        <div class="form__contact">
          <el-row>
            <el-col>
              <div class="info__fact">
                <a href="mailto:estebancores@gmail.com">
                  <span class="s_f">estebancores@gmail.com</span> <br>
                  <span class="s_l">E - mail</span>
                </a>
              </div>
              <div class="info__fact">
                <a href="https://www.linkedin.com/in/sdestebancores/"target="_blank">
                  <span class="s_f">@estebancores</span> <br>
                  <span class="s_l">Linked In</span>
                </a>
              </div>
              <hr>
              <form @submit.prevent="submitForm">
                <el-row>
                  <el-col>
                    <input type="text" v-model="form.subject" :placeholder="translations.subject">
                    <span class="error__form__message" v-if="formErrors.subject"> {{ formErrors.subject[0] }} </span>
                  </el-col>
                  <el-col>
                    <input type="email" v-model="form.email" :placeholder="translations.email">
                    <span class="error__form__message" v-if="formErrors.email"> {{ formErrors.email[0] }} </span>
                  </el-col>
                  <el-col>
                    <textarea v-model="form.message" :placeholder="translations.message"/>
                    <span class="error__form__message" v-if="formErrors.message"> {{ formErrors.message[0] }} </span>
                  </el-col>
                  <el-col>
                    <!--              <div>-->
                    <!--                <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>-->
                    <!--              </div>-->
                  </el-col>
                  <el-col style="text-align: center">
                    <button type="submit"> {{ $t('contact.form.button') }}</button>
                  </el-col>
                </el-row>
              </form>
            </el-col>
          </el-row>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
  import Validate from 'validate.js'

  export default {
    name: "contact",
    data() {
      return {
        form: {
          email: '',
          subject: '',
          message: ''
        },
        formErrors: {
          email: null,
          subject: null,
          message: null
        },
        capchat: false
      }
    },
    computed: {
      translations() {
        return this.$t('contact.placeholders')
      }
    },
    methods: {
      async onError() {
        if (process.browser) {
          await this.$recaptcha.reset()
          window.location.href = '#'
        }
      },
      onSuccess(token) {
        this.capchat = true
      },
      onExpired() {
        this.capchat = false
      },
      cleanForm() {
        this.form = {
          email: '',
          subject: '',
          message: ''
        }
      },
      async submitForm() {
        if (this.validateForm()) return
        const messageRef = this.$fire.database.ref('message')
        await messageRef.set(this.form)
        let translations = this.$t('contact.dialog')
        this.$alert(translations.ok, {confirmButtonText: translations.btn});
        await this.$fire.analytics.logEvent('message_submitted')
        this.cleanForm()
      },
      validateForm() {
        let constrains = this.formConstraints()
        let errors = Validate.validate(this.form, constrains, {fullMessages: false})
        this.formErrors = {email: null, subject: null, message: null}
        if (errors) {
          this.formErrors = errors
          return true
        }
        return false

      },
      formConstraints() {
        let formTranslations = this.$t('contact.form')
        let common = {allowEmpty: false}
        return {
          email: {
            presence: {
              ...common,
              message: formTranslations.email
            },
            email: true
          },
          subject: {
            presence: {
              ...common,
              message: formTranslations.subject
            },
          },
          message: {
            presence: {
              ...common,
              message: formTranslations.message
            },
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
