<script lang="ts">
    export let buttonType : "accent" | "secondary" | "tertiary" = "accent"
    export let onClick = () => {}
    export let text: string = ""
    export let className: string = ""
    const cssSelector = {
        accent : 'w-40 h-[42px] rounded bg-accentBlue ' +
            'leading-[42px] text-[13px] font-semibold ' +
            'text-center text-white shadow-[0px_4px_10px_rgba(16,156,241,0.24)] ' +
            'hover:bg-[#34AFF9] hover:shadow-[0px_8px_16px_rgba(52,175,249,0.2)] ' +
            'focus:bg-[#098EDF] focus:shadow-[0px_2px_6px_rgba(9,142,223,0.3)] ',
        secondary : 'w-40 h-[42px] rounded border border-accentBlue ' +
            'leading-[42px] text-[13px] ' +
            'font-semibold text-center text-accentBlue' +
            'hover:border-[#34AFF9] hover:text-[#34AFF9] ' +
            'focus:border-[#098EDF] focus:text-[#098EDF] ',
        tertiary : 'w-40 h-[42px] border-transparent ' +
            'leading-[42px] text-[13px] ' +
            'font-semibold text-center text-accentBlue ' +
            'hover:text-[#34AFF9] focus:text-[#098EDF]',
    }
</script>

<button class={`${cssSelector[buttonType]} ${className}`} on:click="{onClick}">
    {text}
</button>