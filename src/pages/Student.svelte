<script lang="ts">
    import CustomButton from "../components/CustomButton.svelte";
    import TitledInput from "../components/TitledInput.svelte";
    import InnerTable from "../components/InnerTable.svelte";

    let studentList = [
        {
            "pk": 1,
            "name": "Conrado Emeny",
            "phoneNumber": "8893553049",
            "address": "Kingston",
            "addressDetail": "2 Muir Alley"
        }, {
            "pk": 2,
            "name": "Nicolina Persicke",
            "phoneNumber": "3086708979",
            "address": "Si Racha",
            "addressDetail": "45 Hallows Crossing"
        }, {
            "pk": 3,
            "name": "Dorrie Basillon",
            "phoneNumber": "2291071404",
            "address": "Tangkil",
            "addressDetail": "76 Lotheville Court"
        }, {
            "pk": 4,
            "name": "Web Lage",
            "phoneNumber": "7398733798",
            "address": "Kitāf",
            "addressDetail": "613 Mayfield Parkway"
        }, {
            "pk": 5,
            "name": "Collie Portinari",
            "phoneNumber": "7756711282",
            "address": "Plandi",
            "addressDetail": "7210 Debs Alley"
        }, {
            "pk": 6,
            "name": "Keriann Stuehmeier",
            "phoneNumber": "7166364008",
            "address": "Buffalo",
            "addressDetail": "24 Memorial Road"
        }, {
            "pk": 7,
            "name": "Carlee Clampton",
            "phoneNumber": "9924109441",
            "address": "Cuenca",
            "addressDetail": "09678 Redwing Plaza"
        }, {
            "pk": 8,
            "name": "Esteban Magnay",
            "phoneNumber": "5848368019",
            "address": "Shimabara",
            "addressDetail": "4 Crescent Oaks Way"
        }, {
            "pk": 9,
            "name": "Lowe McGown",
            "phoneNumber": "7545994893",
            "address": "Évreux",
            "addressDetail": "88 Milwaukee Place"
        }, {
            "pk": 10,
            "name": "Emmanuel Balleine",
            "phoneNumber": "8692382773",
            "address": "Baoquan",
            "addressDetail": "1 Mayer Plaza"
        }, {
            "pk": 11,
            "name": "April Hallmark",
            "phoneNumber": "7187861441",
            "address": "Pingshanhu",
            "addressDetail": "15696 Sunnyside Way"
        }, {
            "pk": 12,
            "name": "Mora Cockaday",
            "phoneNumber": "6284229005",
            "address": "Kedungcangkring",
            "addressDetail": "045 Kings Center"
        }, {
            "pk": 13,
            "name": "Matthew Ajean",
            "phoneNumber": "9151379454",
            "address": "Villaviciosa",
            "addressDetail": "72 Myrtle Terrace"
        }, {
            "pk": 14,
            "name": "Rodney Astell",
            "phoneNumber": "6305388326",
            "address": "Naperville",
            "addressDetail": "3 Springview Point"
        }, {
            "pk": 15,
            "name": "Dud Riach",
            "phoneNumber": "6593626350",
            "address": "Kuttu",
            "addressDetail": "221 Dorton Trail"
        }, {
            "pk": 16,
            "name": "Glenda Leijs",
            "phoneNumber": "8515669782",
            "address": "Tamnag",
            "addressDetail": "4271 East Hill"
        }, {
            "pk": 17,
            "name": "Morgan Hemmingway",
            "phoneNumber": "2925189653",
            "address": "Jönköping",
            "addressDetail": "925 Birchwood Avenue"
        }, {
            "pk": 18,
            "name": "Pace Tussaine",
            "phoneNumber": "2659386844",
            "address": "Markaz Bilād aţ Ţa‘ām",
            "addressDetail": "9 Dryden Street"
        }, {
            "pk": 19,
            "name": "Adriano Swains",
            "phoneNumber": "8231946433",
            "address": "Anyar",
            "addressDetail": "82126 John Wall Lane"
        }, {
            "pk": 20,
            "name": "Larisa Gurrado",
            "phoneNumber": "3042191639",
            "address": "Carcavelos",
            "addressDetail": "064 Sundown Junction"
        }, {
            "pk": 21,
            "name": "Skipp Lindenfeld",
            "phoneNumber": "7962502984",
            "address": "Lanyang",
            "addressDetail": "91199 Pawling Alley"
        }, {
            "pk": 22,
            "name": "Cloris Eskrigg",
            "phoneNumber": "6876595210",
            "address": "Thị Trấn Tà Lùng",
            "addressDetail": "43185 Mitchell Alley"
        }, {
            "pk": 23,
            "name": "Judi Flory",
            "phoneNumber": "9169081036",
            "address": "Kogon",
            "addressDetail": "0 Marcy Crossing"
        }, {
            "pk": 24,
            "name": "Slade Kenealy",
            "phoneNumber": "2075583590",
            "address": "Francisco Villa",
            "addressDetail": "79255 Merchant Parkway"
        }, {
            "pk": 25,
            "name": "Shea Livett",
            "phoneNumber": "1579928656",
            "address": "Itako",
            "addressDetail": "9 Independence Lane"
        }
    ]
    let showStudentInfo: boolean = false
    let selectedStudentId: number = -1
    let activatedTab: string | undefined = "tabProfile"
    let currentTabLivingInfo: string | undefined = "weekdays"
    let currentBookInfo: string | undefined = "ing"
    let toggleTable: boolean = false
    let menuInfoList = [
        {
            id: 'tabProfile',
            name: '기본정보'
        },
        {
            id: 'tabWrite',
            name: '작성정보'
        },
        {
            id: 'tabManageGoal',
            name: '매니징 목표'
        },
        {
            id: 'tabPromise',
            name: '약속 구조'
        },
        {
            id: 'tabPinMoney',
            name: '용돈 구조'
        },
        {
            id: 'tabManageWay',
            name: '매니징 방법'
        },
        {
            id: 'tabLivingInfo',
            name: '생활정보'
        },
        {
            id: 'tabCubeBook',
            name: '큐브책'
        },
        {
            id: 'tabBook',
            name: '교재 정보'
        },
        {
            id: 'tabProgram',
            name: '프로그램 종류'
        },
    ]
    let teacherList: string[] = ["TK", "WJ"]
    let programArr: string[] = ["자기인식", "진로탐색"]
    let programText: string = ''

    const addProgram = () => {
        if (programText !== '') {
            programArr = [...programArr, programText]
            programText = ""
        }
    }
</script>

<CustomButton type="accent" text="학생 추가" className="absolute top-[5%] left-[75%]"/>
<section class="flex h-full">
    {#if !toggleTable}
        <div class="h-[70%] w-[20%] mt-[7%] ml-[2%] overflow-scroll relative">
            <table class="bg-white rounded-tl rounded-bl rounded-br w-full relative"
                   style="filter: drop-shadow(0px 6px 18px rgba(0,0,0,0.06));">
                <thead class="h-[48px] border-b-[0.5px] border-gray ">
                <tr class="">
                    <th class="sticky top-0 bg-white text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">
                        #
                    </th>
                    <th class="sticky top-0 bg-white text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">
                        Name
                    </th>
                    <th class="sticky top-0 bg-white text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">
                        inCharge
                    </th>
                </tr>
                </thead>
                <tbody class="">
                {#each studentList as student, index}
                    <tr class={ `border-y-[0.5px] border-gray ${selectedStudentId === index ? 'bg-accentBlue bg-opacity-40' : 'hover:bg-accentBlue hover:bg-opacity-20'}`}
                        on:click="{()=>{showStudentInfo = true; selectedStudentId = index;}}">
                        <td class="text-[15px] font-medium text-left text-tableBlack text-center px-[24px] py-[14px]">
                            {index + 1}
                        </td>
                        <td class="text-[15px] font-medium text-left text-tableBlack text-center px-[24px] py-[14px]">{student.name}</td>
                        <td class="text-[13px] text-left text-tableGray text-center px-[24px] py-[14px]">TK</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    {/if}
    <div class={`mt-[7%] p-[15px] bg-white h-[55px] rounded-tr rounded-br text-bold ${toggleTable ? 'ml-[2%]':''}`}
         style="filter: drop-shadow(0px 6px 18px rgba(0,0,0,0.06));"
         on:click="{()=>{toggleTable = !toggleTable}}">{!toggleTable ? '<' : '>'}</div>


    {#if showStudentInfo}
        <section
                class={`mt-[7%] bg-white rounded w-[60%] h-[80%] p-[20px] ${toggleTable ? 'ml-[2%]':'ml-[5%]'}`}
                style="filter: drop-shadow(0px 6px 18px rgba(0,0,0,0.06));">
            <div id="tabs" class="text-sm font-medium text-black text-center border-b border-black">
                <ul class="flex flex-wrap -mb-px">
                    {#each menuInfoList as menu}
                        <li class="mr-2">
                            <p
                                    id={menu.id}
                                    class={`${activatedTab === menu.id ? 'text-accentBlue border-accentBlue' : 'hover:text-yellow hover:border-yellow border-transparent'} inline-block p-4 rounded-t-lg border-b-2 `}
                                    on:click="{()=>{activatedTab = menu.id}}">
                                {menu.name}</p>
                        </li>
                    {/each}
                    <li>
                        <p class="inline-block p-4 text-gray rounded-t-lg cursor-not-allowed ">Disabled</p>
                    </li>
                </ul>
            </div>
            <section class="rounded-[4px] bg-white mt-[25px] p-[22px]"
                     style="box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);">
                {#if activatedTab === 'tabProfile'}
                    <div class="flex relative">
                        <form class="w-[70%]">
                            <TitledInput type="text" value={studentList[selectedStudentId].name} title="이름"
                                         className="w-[40%]" placeholder="이름"/>
                            <TitledInput type="text" value={studentList[selectedStudentId].phoneNumber}
                                         title="전화번호"
                                         className="w-[40%]" placeholder="전화번호" divClassName="mt-[16px]"/>
                            <TitledInput type="date" value="2000-01-01" title="생년월일" className="w-[40%]"
                                         placeholder="이름" divClassName="mt-[16px]"/>
                        </form>
                        <CustomButton type="accent" text="수정하기" className="absolute left-[75%]"/>
                    </div>
                {:else if activatedTab === 'tabWrite'}
                    <div class="flex relative">
                        <form class="w-[70%]">
                            <TitledInput type="text" value="TK" title="작성매니저" className="w-[40%]"
                                         placeholder="작성매니저이름"/>
                            <TitledInput type="date" value="2022-04-24" title="작성일자" className="w-[40%]"
                                         placeholder="이름" divClassName="mt-[16px]"/>
                        </form>
                        <CustomButton type="accent" text="수정하기" className="absolute left-[75%]"/>
                    </div>
                {:else if activatedTab === 'tabManageGoal'}
                    <InnerTable
                            rowData={[['매니징 목표','<textarea></textarea>'],
                            ['설정 매니저',null],
                            ['설정일','<input type="date"/>']]}
                            thList={['매니징 목표', '설정 매니저', '설정일']} teacherArr={teacherList} id="manageGoal"/>
                {:else if activatedTab === 'tabPromise'}
                    <InnerTable
                            rowData={[['약속 구조','<textarea></textarea>'],
                            ['설정 매니저',null],
                            ['설정일','<input type="date"/>']]}
                            thList={['약속 구조', '설정 매니저', '설정일']} teacherArr={teacherList} id="manageGoal"/>
                {:else if activatedTab === 'tabPinMoney'}
                    <InnerTable
                            rowData={[['금액','<input type="number" value={0}/>'],
                            ['용돈 약속','<input type="text" value=""/>'],
                            ['설정 매니저',null],
                            ['설정일','<input type="date"/>']]}
                            thList={['금액','용돈 약속','설정 매니저', '설정일']} teacherArr={teacherList} id="manageGoal"/>
                {:else if activatedTab === 'tabManageWay'}
                    <InnerTable
                            rowData={[['매니징 방법','<textarea></textarea>'],
                            ['설정 매니저',null],
                            ['설정일','<input type="date"/>']]}
                            thList={['매니징 방법','설정 매니저', '설정일']} teacherArr={teacherList} id="manageGoal"/>
                {:else if activatedTab === 'tabLivingInfo'}
                    <div id="living-info-tab"
                         class="text-xs font-medium text-black text-center border-b border-black">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="mr-2">
                                <p
                                        id="weekdays"
                                        class={`${currentTabLivingInfo === 'weekdays' ? 'text-accentBlue border-accentBlue' : 'hover:text-yellow hover:border-yellow border-transparent'} inline-block p-4 rounded-t-lg border-b-2 `}
                                        on:click="{()=>{currentTabLivingInfo = 'weekdays'}}">
                                    주중 목표
                                </p>
                            </li>
                            <li class="mr-2">
                                <p
                                        id="weekends"
                                        class={`${currentTabLivingInfo === 'weekends' ? 'text-accentBlue border-accentBlue' : 'hover:text-yellow hover:border-yellow border-transparent'} inline-block p-4 rounded-t-lg border-b-2 `}
                                        on:click="{()=>{currentTabLivingInfo = 'weekends'}}">
                                    일요일 목표
                                </p>
                            </li>

                        </ul>
                    </div>
                    <div class="flex relative">
                        <section class="mt-1 px-2 w-[50%]">
                            {#if currentTabLivingInfo === 'weekdays'}
                                <TitledInput
                                        title="목표취침"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표기상"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표등원"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표학습"
                                        className=""
                                        type="number"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                            {:else}
                                <TitledInput
                                        title="목표취침-일요일"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표기상-일요일"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표등원-일요일"
                                        className=""
                                        type="time"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                                <TitledInput
                                        title="목표학습-일요일"
                                        className=""
                                        type="number"
                                        placeholder=""
                                        divClassName="mt-4 w-[80%]"
                                />
                            {/if}
                        </section>
                        <CustomButton type="accent" text="수정하기" className="absolute left-[75%] mt-4"/>
                    </div>
                {:else if activatedTab === 'tabCubeBook'}
                    <InnerTable
                            rowData={[['분류','<input type="text"/>'],['내용','<textarea></textarea>']]}
                            thList={['분류','내용']}
                    />
                {:else if activatedTab === 'tabBook'}
                    <div id="book-info-tab"
                         class="text-xs font-medium text-black text-center border-b border-black">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="mr-2">
                                <p
                                        id="ing"
                                        class={`${currentBookInfo === 'ing' ? 'text-accentBlue border-accentBlue' : 'hover:text-yellow hover:border-yellow border-transparent'} inline-block p-4 rounded-t-lg border-b-2 `}
                                        on:click="{()=>{currentBookInfo = 'ing'}}">
                                    진행중교재
                                </p>
                            </li>
                            <li class="mr-2">
                                <p
                                        id="end"
                                        class={`${ currentBookInfo === 'end' ? 'text-accentBlue border-accentBlue' : 'hover:text-yellow hover:border-yellow border-transparent'} inline-block p-4 rounded-t-lg border-b-2 `}
                                        on:click="{()=>{currentBookInfo = 'end'}}">
                                    완료된 교재
                                </p>
                            </li>
                        </ul>
                    </div>
                    {#if currentBookInfo === 'ing'}
                        <InnerTable
                                rowData={[['과목', "<select>" +
                        "<option>선택</option>" +
                        "<option>국어</option>" +
                        "<option>수학</option>" +
                        "<option>영어</option>" +
                        "<option>탐구</option>" +
                        "</select>"],
                            ['교재명', "<input type='text' placeholder='ex)독사, 기탄수학 등'/>"],
                            ['총교재량', "<input type='text' placeholder='ex)100p, 250문제 등'/>"],
                            ['교재 시작일', "<input type='date'/>"],
                            ['최근 진도', "<input type='number' placeholder='ex)70, 100'/>"],
                        ]}
                                thList={['과목','교재명','총교재량','교재 시작일', '최근 진도']}
                                id="book-info-ing"
                        />
                    {:else}
                        <InnerTable
                                rowData={[['과목',"<select>" +
                                 "<option>선택</option>" +
                                 "<option>국어</option>" +
                                 "<option>수학</option>" +
                                 "<option>영어</option>" +
                                 "<option>탐구</option>" +
                                  "</select>"],
                                ['교재명',"<input type='text' placeholder='ex)독사, 기탄수학 등'/>"],
                                ['총교재량',"<input type='text' placeholder='ex)100p, 250문제 등'/>"],
                                ['교재 시작일',"<input type='date'/>"],
                                ['최근 진도',"<input type='number' placeholder='ex)70, 100'/>"],
                                ]}
                                thList={['과목','교재명','총교재량','교재 시작일', '최근 진도']}
                                id="book-info-end"
                        />
                    {/if}
                {:else if activatedTab === 'tabProgram'}
                    <section class="relative flex flex-col">
                        <section class="flex flex-wrap">
                            {#each programArr as program}
                                <div class="mx-[10px] p-2 bg-iconGray rounded-[10px]">{program}</div>
                            {/each}

                        </section>
                        <div class="flex mt-4">
                            <TitledInput
                                    placeholder="ex) 동기부여 등의 해당 학생의 프로그램"
                                    divClassName="w-[40%]"
                                    className="mt-2"
                                    bind:value="{programText}"
                            />
                            <CustomButton buttonType="tertiary" text="추가하기" className=""
                                          onClick={()=>addProgram()}/>
                        </div>
                        <CustomButton buttonType="accent" text="수정하기" className="absolute left-[75%]"
                        />
                    </section>
                {/if}
            </section>
        </section>
    {/if}
</section>
