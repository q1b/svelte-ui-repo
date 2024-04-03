<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
   
    const frameworks = [
      {
        value: "sveltekit",
        label: "SvelteKit"
      },
      {
        value: "next",
        label: "Next.js"
      },
      {
        value: "astro",
        label: "Astro"
      },
      {
        value: "nuxt",
        label: "Nuxt.js"
      }
    ];
  </script>
   
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
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </Card.Footer>
  </Card.Root>