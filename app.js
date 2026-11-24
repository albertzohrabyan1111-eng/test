const root = document.querySelector(`#root`);
const borderHeight = innerHeight;
root.style.minHeight = `${borderHeight}px`;
const taskBox = document.querySelector(`.task_box`)
const rezrevDeleteId = []
const date = new Date()
const year = date.getFullYear()
const totalShot = document.querySelector(`.totalShot`)
const activeShot = document.querySelector(`.activeShot`)
const completadShot = document.querySelector(`.completadShot`)
const overdueShot = document.querySelector(`.overdueShot`)
let mounth = date.getMonth() + 1 + ``
if (mounth.length < 1) {
    mounth = `0` + date.getMonth()
}
let dey = date.getDay() + ``
if (dey.length <= 1) {
    dey = `0` + date.getDay()
}
let conc = `${year}-${mounth}-${dey}`

const members = [
    {
        userID: 1,
        userFirsName: "Արամ",
        userLastName: "Պետրոսյան",
        avatar: "https://example.com/avatars/aram.jpg",
        userEmail: "aram.petrosyan@example.com",
        userPhon: "+37491123456"
    },
    {
        userID: 2,
        userFirsName: "Աննա",
        userLastName: "Սարգսյան",
        avatar: "https://example.com/avatars/anna.jpg",
        userEmail: "anna.sargsyan@example.com",
        userPhon: "+37493234567"
    },
    {
        userID: 3,
        userFirsName: "Դավիթ",
        userLastName: "Մարգարյան",
        avatar: null,
        userEmail: "davit.margaryan@example.com",
        userPhon: "+37499345678"
    },
    {
        userID: 4,
        userFirsName: "Մարիամ",
        userLastName: "Հակոբյան",
        avatar: "https://example.com/avatars/mariam.jpg",
        userEmail: "mariam.hakobyan@example.com",
        userPhon: "+37477456789"
    },
    {
        userID: 5,
        userFirsName: "Գևորգ",
        userLastName: "Կարապետյան",
        avatar: "https://example.com/avatars/gevorg.jpg",
        userEmail: "gevorg.karapetyan@example.com",
        userPhon: "+37494567890"
    },
    {
        userID: 6,
        userFirsName: "Լիլիթ",
        userLastName: "Խաչատրյան",
        avatar: null,
        userEmail: "lilit.khachatryan@example.com",
        userPhon: "+37455678901"
    },
    {
        userID: 7,
        userFirsName: "Տիգրան",
        userLastName: "Հովհաննիսյան",
        avatar: "https://example.com/avatars/tigran.jpg",
        userEmail: "tigran.hovhannisyan@example.com",
        userPhon: "+37491789012"
    },
    {
        userID: 8,
        userFirsName: "Նարեկ",
        userLastName: "Ավետիսյան",
        avatar: "https://example.com/avatars/narek.jpg",
        userEmail: "narek.avetisyan@example.com",
        userPhon: "+37493890123"
    },
    {
        userID: 9,
        userFirsName: "Էլեն",
        userLastName: "Վարդանյան",
        avatar: null,
        userEmail: "elen.vardanyan@example.com",
        userPhon: "+37499901234"
    },
    {
        userID: 10,
        userFirsName: "Գոռ",
        userLastName: "Մկրտչյան",
        avatar: "https://example.com/avatars/gor.jpg",
        userEmail: "gor.mkrtchyan@example.com",
        userPhon: "+37477012345"
    },
    {
        userID: 11,
        userFirsName: "Հայկ",
        userLastName: "Գրիգորյան",
        avatar: "https://example.com/avatars/hayk.jpg",
        userEmail: "hayk.grigoryan@example.com",
        userPhon: "+37494123457"
    },
    {
        userID: 12,
        userFirsName: "Սոնա",
        userLastName: "Ասատրյան",
        avatar: null,
        userEmail: "sona.asatryan@example.com",
        userPhon: "+37455234568"
    },
    {
        userID: 13,
        userFirsName: "Էրիկ",
        userLastName: "Մանուկյան",
        avatar: "https://example.com/avatars/erik.jpg",
        userEmail: "erik.manukyan@example.com",
        userPhon: "+37491345679"
    },
    {
        userID: 14,
        userFirsName: "Մանե",
        userLastName: "Ղազարյան",
        avatar: "https://example.com/avatars/mane.jpg",
        userEmail: "mane.ghazaryan@example.com",
        userPhon: "+37493456790"
    },
    {
        userID: 15,
        userFirsName: "Արթուր",
        userLastName: "Մնացականյան",
        avatar: null,
        userEmail: "arthur.mnatsakanyan@example.com",
        userPhon: "+37499567801"
    },
    {
        userID: 16,
        userFirsName: "Նարե",
        userLastName: "Բաղդասարյան",
        avatar: "https://example.com/avatars/nare.jpg",
        userEmail: "nare.baghdasaryan@example.com",
        userPhon: "+37477678912"
    },
    {
        userID: 17,
        userFirsName: "Վահե",
        userLastName: "Միքայելյան",
        avatar: "https://example.com/avatars/vahe.jpg",
        userEmail: "vahe.mikayelyan@example.com",
        userPhon: "+37494789023"
    },
    {
        userID: 18,
        userFirsName: "Անուշ",
        userLastName: "Դանիելյան",
        avatar: null,
        userEmail: "anush.danielyan@example.com",
        userPhon: "+37455890134"
    },
    {
        userID: 19,
        userFirsName: "Կարեն",
        userLastName: "Առաքելյան",
        avatar: "https://example.com/avatars/karen.jpg",
        userEmail: "karen.arakelyan@example.com",
        userPhon: "+37491901245"
    },
    {
        userID: 20,
        userFirsName: "Քրիստինե",
        userLastName: "Սահակյան",
        avatar: "https://example.com/avatars/kristine.jpg",
        userEmail: "kristine.sahakyan@example.com",
        userPhon: "+37493012356"
    }
];
const taskContainer = [
    {
        id: 1,
        taskName: "UI/UX Design",
        Deadline: "11.11.2026",
        Deadline_tim: "2026-11-11",
        uptade: null,
        task: "Ստեղծել գլխավոր էջի դիզայնը և նախատիպը (wireframe)",
        taskStatus: "Active",
        avatar: null,
        membersId: [1, 2]
    },
    {
        id: 2,
        taskName: "Frontend Development",
        Deadline: "15.11.2026",
        Deadline_tim: "2026-11-15",
        uptade: "12.11.2026",
        task: "Իրականացնել ռեսպոնսիվ մենյուի և գլխավոր բաժնի կոդավորումը",
        taskStatus: "Active",
        avatar: null,
        membersId: [2]
    },
    {
        id: 3,
        taskName: "Backend API",
        Deadline: "18.11.2026",
        Deadline_tim: "2026-11-18",
        uptade: null,
        task: "Մշակել օգտատերերի գրանցման և մուտքի (Auth) API-ները",
        taskStatus: "Overdue",
        avatar: null,
        membersId: [3, 5]
    },
    {
        id: 4,
        taskName: "Database Architecture",
        Deadline: "20.11.2026",
        Deadline_tim: "2026-11-20",
        uptade: "14.11.2026",
        task: "Նախագծել տվյալների բազայի աղյուսակները և կապերը",
        taskStatus: "Completed",
        avatar: null,
        membersId: [4]
    },
    {
        id: 5,
        taskName: "QA Testing",
        Deadline: "22.11.2026",
        Deadline_tim: "2026-11-22",
        uptade: null,
        task: "Ստուգել գրանցման ֆորմայի վալիդացիաները և ուղղել սխալները",
        taskStatus: "Active",
        avatar: null,
        membersId: [8]
    },
    {
        id: 6,
        taskName: "Payment Integration",
        Deadline: "25.11.2026",
        Deadline_tim: "2026-11-25",
        uptade: "16.11.2026",
        task: "Կցել առցանց վճարային համակարգը (Idram / ArCa)",
        taskStatus: "Overdue",
        avatar: null,
        membersId: [9]
    },
    {
        id: 7,
        taskName: "SEO Optimization",
        Deadline: "28.11.2026",
        Deadline_tim: "2026-11-28",
        uptade: null,
        task: "Ավելացնել մետա թեգերը և օպտիմալացնել նկարների չափսերը",
        taskStatus: "Active",
        avatar: null,
        membersId: [10]
    },
    {
        id: 8,
        taskName: "Mobile Adaptation",
        Deadline: "01.12.2026",
        Deadline_tim: "2026-12-01",
        uptade: "20.11.2026",
        task: "Հարմարեցնել կայքը բջջային հեռախոսների և պլանշետների համար",
        taskStatus: "Active",
        avatar: null,
        membersId: [6, 7]
    },
    {
        id: 9,
        taskName: "Security Audit",
        Deadline: "05.12.2026",
        Deadline_tim: "2026-12-05",
        uptade: null,
        task: "Ստուգել համակարգի անվտանգությունը SQL injection-ներից",
        taskStatus: "Overdue",
        avatar: null,
        membersId: [11]
    },
    {
        id: 10,
        taskName: "Deployment",
        Deadline: "10.12.2026",
        Deadline_tim: "2026-12-10",
        uptade: null,
        task: "Տեղադրել նախագիծը հիմնական սերվերի վրա (Production)",
        taskStatus: "Completed",
        avatar: null,
        membersId: [7, 13]
    }
];




const members_list = document.querySelectorAll(`.Members_list`);
function members_Creator(members_object, status = null) {
    members_list.forEach(elem => {
        if (elem.classList.contains(status)) {
            elem.innerHTML = "";
            for (let a = 0; a < members_object.length; a++) {
                const item = members_object[a];
                elem.innerHTML += `
                         <div class="members_lisst">
                              <label for="user${status}${item.userID}">
                                   <input class="rad" onclick="task_developer()" id="user${status}${item.userID}" type="checkbox" name="member">
                                   <div class="avatar_box"></div>
                                   <p>${item.userFirsName} ${item.userLastName}</p>
                              </label>
                         </div>
               `;
            }
        }
    });
}



function taskCreator(taskObject = [], main = taskBox) {
    main.innerHTML = "";
    if (!Array.isArray(taskObject) || taskObject.length < 1) {
        main.innerHTML = "<h1>No data available</h1>";
        return;
    }
    const newTaskFilter = taskObject.filter(task => !rezrevDeleteId.includes(task.id))
    const dataFilter = newTaskFilter.filter(task => {
        const dat = task.Deadline_tim
        const dat2 = dat.split("-")
    })
    if (!Array.isArray(newTaskFilter) || newTaskFilter.length < 1) {
        main.innerHTML = "<h1>No data available</h1>";
        return;
    }
    for (let a = 0; a < newTaskFilter.length; a++) {
        const item = newTaskFilter[a];
        let developersHTML = "";
        if (Array.isArray(item.membersId)) {
            const elem = item.membersId.map(devId => {
                const developers = members.find(memId => {
                    if (memId.userID == devId) {
                        developersHTML += `<span>${memId.userFirsName} ${memId.userLastName}</span>`
                    }
                })
            });
        }
        let updateSpan = ``;
        if (item.uptade != null) {
            updateSpan = `<span>Update - ${item.uptade}</span>`
        }
        main.innerHTML += `
               <div class="task">
                    <div class="vernagir_task">
                         <div class="vernagir">
                              <h3>${item.taskName}</h3>
                         </div>
                         <div class="task-ID">
                              <span>#${item.id}</span>
                         </div>
                         <div class="status-task">
                              <span>${item.taskStatus}</span>
                         </div>
                    </div>
                    <div class="buttom_box">
                    <div class="chekqontrol">
                         <input class="task_status_edit" chekId="${item.id}" type="checkbox">
                    </div>
                         <div class="left">
                              <div class="task-information">
                                   <div class="task_info">
                                        <p>${item.task}</p>
                                   </div>
                                   <div class="Deadline-task">
                                        <p>Deadline -${item.Deadline}</p>
                                   </div>
                                   <div class="Deadline-task_update">
                                        ${updateSpan}
                                   </div>
                              </div>
                         </div>
                         <div class="right">
                              <div class="task_members_blok">
                                   <div class="img_members"></div>
                              </div>
                         </div>
                    </div>
                    <div class="task_editor">
                         <div class="user_Name">
                              ${developersHTML}
                         </div>
                         <div class="kojak">
                              <button class="edition" cartId="${item.id}" className="task_edit_box" data-type="Edit">Edit</button>
                              <button class="del" data-type="Delete" cartId="${item.id}"><i class="fa-solid fa-trash"></i></button>
                         </div>
                    </div>
               </div>
          `;
    }
    newTaskFilter.map(task => {
        if (task.taskStatus === `Completed`) {
            taskStat(task.id, newTaskFilter)
        }
    })
    eventMeneger(newTaskFilter, main);
}

function eventMeneger(data, main) {
    const editButton = main.querySelectorAll(`button[data-type=Edit]`);
    const deleteButton = main.querySelectorAll(`button[data-type=Delete]`);
    const vijakElem = document.querySelectorAll(`.vijakElem`);
    const chek = document.querySelectorAll(`.task_status_edit`)
    vijakElem.forEach(navPan => {
        navPan.onclick = function () {
            vijakElem.forEach(a => {
                a.classList.remove(`activ`)
            });
            navPan.classList.add(`activ`);
            const payman = event.currentTarget.getAttribute(`elemStatus`);
            generator(payman, main)
        };
    });

    editButton.forEach(button => {
        const clikButt = button.onclick = function () {
            const userId = parseInt(event.currentTarget.getAttribute(`cartId`));
            editTask(userId, data);
        }
    });

    deleteButton.forEach(button => {
        button.onclick = function () {
            const userId = parseInt(event.currentTarget.getAttribute(`cartId`));
            rezrevDeleteId.push(userId)
            deleteTask(userId, data);
        }
    });

    const buttAdd = document.querySelectorAll(`button[data-typeAdd]`)
    buttAdd.forEach(button => {
        button.onclick = function () {
            const classElem = `.` + event.currentTarget.getAttribute(`className`)
            addWindow(classElem, data)
        }
    })

    chek.forEach(chekbox => {
        chekbox.onclick = function () {
            const vijak = event.currentTarget.checked
            const vijakid = event.currentTarget.getAttribute(`chekid`)
            const task = data.find(dat => dat.id === parseInt(vijakid))
            if (vijak) {
                task.taskStatus = `Completed`
            } else {
                task.taskStatus = `Active`
            }
            taskCreator(data);
            console.log(vijakElem)
            const status = [...vijakElem].find(elem => elem.classList.contains(`activ`))
            generator(status.getAttribute(`elemstatus`))
        }
    })
    const Totlal = 0
    const Active = 0
    const Completed = 0
    const Overdue = 0
}
taskCreator(taskContainer);

function deleteTask(ID, data) {
    const new_Data = data.filter(user => {
        return user.id != ID;
    });
    taskCreator(new_Data);
}

function generator(status = "Total", main) {
    if (status === "Total") {
        taskCreator(taskContainer, main);
        deleteTask(rezrevDeleteId, taskContainer)
    } else {
        const filtr = taskContainer.filter(ObjectElem => {
            return status === ObjectElem.taskStatus;
        });
        taskCreator(filtr, main);
    }
}

function editTask(ID, data) {
    const editWindow = document.querySelector(`.task_edit_box`);
    editWindow.classList.add(`activ`);
    const input = document.querySelectorAll(`.task_edit_box .edit_task_block .task_creat form .creat_task input[name], .task_edit_box .edit_task_block .task_creat form .creat_task textarea[name]`);
    const task = data.find(task => {
        return task.id == ID;
    });
    const membersInProject = task.membersId
    input.forEach(inputs => {
        if (task && task[inputs.name] !== undefined) {
            inputs.value = task[inputs.name] || "";
        }
    });
}

const clouseWindow = document.querySelectorAll(`button[buttonfunction=Close]`)
clouseWindow.forEach(button => {
    button.onclick = function () {
        const buttonClass = `.` + event.currentTarget.getAttribute(`noActiv`)
        document.querySelector(buttonClass).classList.remove(`activ`)

    }
})

function taskStat(taskId, data) {
    const chek = document.querySelectorAll(`.task_status_edit`)
    chek.forEach(chebox => {
        const chekid = chebox.getAttribute(`chekid`)
        if (parseInt(chekid) === taskId) {
            chebox.checked = true
        }
    })
}


    function addWindow(classElem, data) {
        document.querySelector(classElem).classList.add(`activ`)
    }


function members_cucak(payman) {
    const status = event.currentTarget?.getAttribute(`vijak`)
    const membersEl = document?.querySelector(`.Members_list[attr="${payman}"]`)
    const array = [...membersEl?.classList]
    const cl = array.find(arr => arr == "add" || arr == "edit")
    if (status === `false`) {
        members_Creator(members, cl)
        event.currentTarget?.classList.add(`activ`)
        event.currentTarget?.setAttribute(`vijak`, true)
        event.currentTarget.innerHTML = `Members -`
        membersEl.classList?.add(`activ`)
    } else {
        event.currentTarget?.classList.remove(`activ`)
        event.currentTarget?.setAttribute(`vijak`, false)
        event.currentTarget.innerHTML = `Members +`
        membersEl.classList?.remove(`activ`)
    }
}

function task_developer() {
    const chek = event.currentTarget
    const box = chek?.closest(`.members_lisst`)
    const text = box?.querySelector(`p`)
    if (chek.checked) {
        box.classList?.add("activ");
        text.classList?.add(`activ`)
    }else{
        box.classList?.remove("activ");
        text.classList?.remove(`activ`)
    }
}   

function saveMembers() {
    
}

function saveTask() {
    
}



const barsBtn = document.querySelector(`.bars_btn`);
const navPanel = document.querySelector(`.navigation_panel`);

if (barsBtn && navPanel) {
    barsBtn.addEventListener(`click`, () => {
        navPanel.classList.toggle(`activ`);
        const icon = barsBtn.querySelector(`i`);
        if (icon) {
            icon.classList.toggle(`fa-bars`);
            icon.classList.toggle(`fa-xmark`);
        }
    });

    navPanel.querySelectorAll(`.vijakElem`).forEach(item => {
        item.addEventListener(`click`, () => {
            navPanel.classList.remove(`activ`);
            const icon = barsBtn.querySelector(`i`);
            if (icon) {
                icon.classList.add(`fa-bars`);
                icon.classList.remove(`fa-xmark`);
            }
        });
    });
}