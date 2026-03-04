<script lang="ts">
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { getPageErrorType } from '$lib/utils/page-error';

  const unknownError = {
    title: m.error_unknown_title(),
    message: m.error_unknown_message(),
  };

  const createErrorMessages = (error: App.Error | null): { title: string; message: string } => {
    if (!error) return unknownError;
    const errorType = getPageErrorType(error);
    switch (errorType) {
      case 'PageNotFoundError':
        return {
          title: m.error_page_not_found_title(),
          message: m.error_page_not_found_message(),
        };
      case 'LanguageNotFoundError':
        return {
          title: m.error_language_not_found_title(),
          message: m.error_language_not_found_message(),
        };
      default:
        return unknownError;
    }
  };

  const errorMessage = createErrorMessages(page.error);
</script>

<svelte:head>
  <title>{errorMessage.title}</title>
  <meta name="description" content={errorMessage.message} />
</svelte:head>

<h1>{errorMessage.title}</h1>
<p>{errorMessage.message}</p>
