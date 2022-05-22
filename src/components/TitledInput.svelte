<script lang="ts">
    export let title: string = ""
    export let className: string = ""
    export let type: string = "text"
    export let value: any = undefined
    export let placeholder: string = ""
    export let divClassName: string = ""

</script>

<div class={`flex flex-col ${divClassName}`}>
    {#if title !== ''}
        <p class="text-[11px] font-medium text-left text-accentBlue">{title}</p>
    {/if}
    {#if type === "password"}
        <input type="password" bind:value placeholder={placeholder}
               class={`border-b border-textHelpGray ${title !== '' ? 'mt-[4px]' : ''} ${className}`}/>
    {:else if type === "email"}
        <input type="email" bind:value placeholder={placeholder}
               class={`border-b border-textHelpGray ${title !== '' ? 'mt-[4px]' : ''} ${className}`}/>
    {:else if type === "number"}
        <input type="number" bind:value placeholder={placeholder}
               class={`border-b border-textHelpGray ${title !== '' ? 'mt-[4px]' : ''} ${className}`}/>
    {:else if type === "date"}
        <input type="date" bind:value placeholder={placeholder}
               class={`border-b border-textHelpGray ${title !== '' ? 'mt-[4px]' : ''} ${className}`}/>
    {:else}
        <input type="text" bind:value placeholder={placeholder}
               class={`border-b border-textHelpGray ${title !== '' ? 'mt-[4px]' : ''} ${className}`}/>
    {/if}
</div>