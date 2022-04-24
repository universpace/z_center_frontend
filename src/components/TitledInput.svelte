<script lang="ts">
    export let title:string = ""
    export let className:string = ""
    export let setType:string = "text"
    export let value:any = undefined
    export let placeholder:string = ""
    export let divClassName : string = ""

</script>

<div class={`flex flex-col ${divClassName}`}>
    {#if title !==''}
        <p class="text-[11px] font-medium text-left text-accentBlue">{title}</p>
    {/if}
    <input type={setType} value={value} placeholder={placeholder} class={`border-b border-textHelpGray ${title !=='' ? 'mt-[4px]' : ''} ${className}`}/>
</div>