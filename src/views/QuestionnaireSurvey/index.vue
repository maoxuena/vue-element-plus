<template>
  <div class="questionnaire-survey-container">
    <add></add>
  </div>
</template>

<script>
import Add from './components/Add'
export default {
  name: 'QuestionnaireSurvey',
  components: {
    Add
  }
}
</script>

<style lang="scss" scoped>
.questionnaire-survey-container{
  height: 100%;
}
</style>