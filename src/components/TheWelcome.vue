<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>How to play?</template>
    <p>
      Rules here.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Create your Profile</template>
    <p>
      More instructions are available in <code>README.md</code>.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Check Highscores</template>
    <p>
      Get official tools and libraries for your project:
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>, and
      <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a>. If you need more
      resources, we suggest paying
      <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
      a visit.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Share with a friend</template>
    <p>
      Got stuck? Ask your question on
      <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
      <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
      You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
      <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
      twitter account for latest news in the Vue world.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Me</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    me by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>
