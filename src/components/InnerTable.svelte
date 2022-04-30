<script lang="ts">
    import CustomButton from "./CustomButton.svelte";

    export let rowArr: object[] = []
    export let thList: string[] = []
    export let teacherArr: string[] = []
    export let id: string = ''
    export let rowData: any[] = []
    let rowArrCopy = rowArr.slice()

    const addList = () => {
        rowArrCopy = [...rowArrCopy, Object.fromEntries(rowData)]
        console.log(rowArrCopy)
    }
</script>

<div class="flex relative" id={id}>
    <table class="bg-white w-[70%] rounded-tl rounded-bl rounded-br h-[80%]"
           style=" filter: drop-shadow(0px 6px 18px rgba(0,0,0,0.06));"
    >
        <thead class="h-[48px] border-b-[0.5px] border-gray ">
        <tr class="">
            {#each thList as thText}
                <th class="opacity-50 text-[14px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">
                    {thText}
                </th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each rowArrCopy as row}
            <tr class="border-y-[0.5px] border-gray hover:bg-accentBlue  hover:bg-opacity-20">
                {#each thList as key}
                    {#if key === '설정 매니저'}
                        <td class="text-[11px] font-medium text-tableBlack text-center px-[24px] py-[14px]">
                            <select>
                                {#each teacherArr as teacher}-->
                                    <option>{teacher}</option>
                                {/each}
                            </select>
                        </td>
                    {:else}
                        <td class="text-[11px] font-medium text-tableBlack text-center px-[24px] py-[14px]">
                            {@html row[key]}
                        </td>
                    {/if}
                {/each}
                <!--                <td class="text-[11px] font-medium text-tableBlack text-center px-[24px] py-[14px]">-->
                <!--                    <textarea></textarea>-->
                <!--                </td>-->
                <!--                <td class="text-[11px] font-medium text-tableBlack text-center px-[24px] py-[14px]">-->
                <!--                    <select>-->
                <!--                        {#each teacherList as teacher}-->
                <!--                            <option>{teacher}</option>-->
                <!--                        {/each}-->
                <!--                    </select>-->
                <!--                </td>-->
                <!--                <td class="text-[11px] font-medium text-tableBlack text-center px-[24px] py-[14px]">-->
                <!--                    <input type="date">-->
                <!--                </td>-->
            </tr>
        {/each}
        <tr>
            <td colspan={3} class="text-center">
                <CustomButton buttonType="tertiary" className="text-center" text="+"
                              onClick={()=>addList()}>
                </CustomButton>
            </td>
        </tr>
        </tbody>
    </table>
    <CustomButton type="accent" text="수정하기" className="absolute left-[75%]"/>
</div>