import InflatableCard from './InflatableCard.vue';
import InflatableCardStage from './InflatableCardStage.vue';

// TODO: Clean up this story
export default {
  title: 'Components/InflatableCard',
  component: InflatableCard,
  render: (args) => ({
    components: { InflatableCard, InflatableCardStage },
    setup() {
      return { args };
    },
    template: `
      <InflatableCardStage :style="{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', height: '400px' }">
        <InflatableCard :style="{ maxWidth: '20rem' }">
          <template v-if="args.deflatedSlot" #deflated>
            <div v-html="args.deflatedSlot" /> 
          </template>
          <template #inflated>
            <div :style="{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}">This is inflated content</div>
          </template>
        </InflatableCard>
        <InflatableCard :style="{ maxWidth: '20rem' }">
          <template v-if="args.deflatedSlot" #deflated>
            <div v-html="args.deflatedSlot" /> 
          </template>
        </InflatableCard>
        <InflatableCard :style="{ maxWidth: '20rem' }">
          <template #deflated>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </div>
          </template>
          <template #inflated>
            <div :style="{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingInline: '2rem'}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </div>
          </template>
        </InflatableCard>
      </InflatableCardStage>
    `,
  })
};

export const Basic = {
  args: {
    deflatedSlot: 'This is some deflated content'
  }
};