<script context="module">
	import * as Card from '$lib/components/ui/card';

	export const meta = {
		title: 'Components/Card',
		component: Card,
		subcomponents: {
			Header: Card.Header,
			Title: Card.Title,
			Description: Card.Description,
			Content: Card.Content,
			Footer: Card.Footer
		}
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Story name="Default">
    <Card.Root class="w-[350px]">
        <Card.Header>
          <Card.Title>Create project</Card.Title>
          <Card.Description>Deploy your new project in one-click.</Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div class="grid w-full items-center gap-4">
                Content goes here
            </div>
          </form>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          Footer
        </Card.Footer>
      </Card.Root>
</Story>
