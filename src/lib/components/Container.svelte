<script lang="ts">
  let { children } = $props();
</script>

<div data-slot="container" class="mx-auto max-w-7xl">{@render children()}</div>
