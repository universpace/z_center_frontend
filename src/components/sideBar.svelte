<script lang="ts">
    import {location, push} from "svelte-spa-router";
    import {get} from "svelte/store";
    import contacts from "../assets/images/icons/contacts.svg"
    import deals from "../assets/images/icons/deals.svg"
    import settings from "../assets/images/icons/settings.svg"
    import dashboard from "../assets/images/icons/dashboard.svg"
    import toggle from "../assets/images/icons/toggle.svg"

    let current: string = get(location)
    let fold: boolean = false
    const disableLocation: string[] = ['/login', '/assign']
    const isDisable = () => {
        // const currentLocation = get(location)
        return disableLocation.includes(current)
    }

</script>
{#if !isDisable()}
    {#if !fold}
        <aside class="w-[256px] h-full bg-white px-[24px] pt-[17px] pb-[22px]"
               style="box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);">
            <p class="text-lg font-semibold text-left text-accentBlue" on:click="{()=>{push('/')}}">
                ZwonCenterManager</p>
            <section class="mt-[42px] flex " id="teacherInfo">
                <div class="w-[46px] h-[46px] rounded-[23px] bg-gray p-[13px] mr-[16px]">
                    <img src={contacts} class="w-[20px] h-[20px]" alt="ManagerIcon"/>
                </div>
                <p>
        <span class="w-full text-sm font-medium text-left text-black">
            TK
        </span>
                    <span class="w-full text-[11px] font-medium text-left text-gray">example@example.com</span>
                </p>
            </section>
            <section class="mt-[40px]">
                <div class="flex" on:click="{()=>{push('/')}}">
                    <img src={dashboard} alt="dashboard"
                         class={`w-[20px] h-[20px] ${current === '/' ? 'color-accentBlue' : 'color-gray'}`}/>
                    <p class={`ml-[14px] font-medium text-left ${current === '/' ? 'text-accentBlue' : 'text-gray'}`}>
                        Dashboard</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/student/list')}}">
                    <img src={contacts} alt="students" class="w-[20px] h-[20px]"/>
                    <p class="ml-[14px] font-medium text-left text-gray">Students</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/record/list')}}">
                    <img src={deals} alt="records" class="w-[20px] h-[20px]"/>
                    <p class="ml-[14px] font-medium text-left text-gray">Records</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/settings')}}">
                    <img src={settings} alt="settings" class="w-[20px] h-[20px]"/>
                    <p class="ml-[14px] font-medium text-left text-gray">Settings</p>
                </div>
            </section>
            <section class="mt-[351px] flex" on:click="{()=>{fold = !fold}}">
                <img src={toggle} alt="toggle" class="w-[14px] h-[14px]"/>
                <p class="ml-[14px] text-[11px] font-medium text-left text-gray">Toggle Sidebar</p>
            </section>
        </aside>
    {:else}
        <aside class="w-[68px] h-full bg-white px-[11px] pt-[17px] pb-[22px]"
               style="box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);">
            <p class="text-lg font-semibold text-left text-accentBlue" on:click="{()=>{push('/')}}">ZCM</p>
            <section class="mt-[42px] flex " id="teacherInfoToggled">
                <div class="w-[46px] h-[46px] rounded-[23px] bg-gray p-[13px]">
                    <img src={contacts} class="w-[20px] h-[20px]" alt="Manager Icon"/>
                </div>
            </section>
            <section class="mt-[40px] ml-[13px]">
                <div class="flex" on:click="{()=>{push('/')}}">
                    <img src={dashboard} alt="dashboard"
                         class={`w-[20px] h-[20px] ${current === '/' ? 'color-accentBlue' : 'color-gray'}`}/>
                    <p class={`ml-[14px] font-medium text-left ${current === '/' ? 'text-accentBlue' : 'text-gray'}`}>
                        &nbsp;</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/student/list')}}">
                    <img src={contacts} alt="students" class="w-[20px] h-[20px]"/>
                    <p class={`ml-[14px] font-medium text-left ${current === '/' ? 'text-accentBlue' : 'text-gray'}`}>
                        &nbsp;</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/record/list')}}">
                    <img src={deals} alt="records" class="w-[20px] h-[20px]"/>
                    <p class={`ml-[14px] font-medium text-left ${current === '/' ? 'text-accentBlue' : 'text-gray'}`}>
                        &nbsp;</p>
                </div>
                <div class="flex mt-[20px]" on:click="{()=>{push('/settings')}}">
                    <img src={settings} alt="settings" class="w-[20px] h-[20px]"/>
                    <p class={`ml-[14px] font-medium text-left ${current === '/' ? 'text-accentBlue' : 'text-gray'}`}>
                        &nbsp;</p>
                </div>
            </section>
            <section class="mt-[353px] flex ml-[13px]" on:click="{()=>{fold = !fold}}">
                <img src={toggle} alt="toggle" class="w-[14px] h-[14px]"/>
            </section>
        </aside>
    {/if}

{/if}