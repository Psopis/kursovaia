let text_0 = 'Благодаря своему трудолюбию, ответственности и целеустремленности,' +
    ' этот прилежный ученик часто добивался высоких результатов не только в учебе,' +
    ' но и в различных спортивных конкурсах, олимпиадах. Учителя ставят его в пример другим ученикам и поощряют за старания.'
let text_rasl = 'Каждое утро этот ученик приходит в школу заранее, чтобы успеть повторить материал перед уроками.' +
    ' На занятиях он всегда сидит за первой партой, внимательно слушает учителей и конспектирует все важные ' +
    'моменты. Если что-то остается непонятным, он не стесняется задавать вопросы и просить объяснить еще раз.'
let text_papa_hat = 'Данный ученик активно участвует в школьной жизни. Он состоит в музыкальном кружке, где ' +
    'вместе с другим учеником (Кириилом Хемитом) работает над музыкой. Также он помогает организовывать ' +
    'школьные мероприятия и праздники, входит в состав ученического совета.'
let text_mati = 'Благодаря своему прилежанию и упорству, Матвей имеет отличные оценки по всем предметам и ' +
    'является одним из лучших учеников в школе. Он планирует поступать в престижный университет и' +
    ' уверен, что его старания в школьные годы помогут ему достичь поставленных целей.'
let text_megan = 'Алиса обладает живым умом и неутолимой тягой к знаниям. На уроках она всегда в первых рядах, ' +
    'внимательно слушает учителей и задает уточняющие вопросы.' +
    ' Ей легко даются как гуманитарные, так и точные науки, но особенно она увлечена иностранными языками и литературой.'

function slider() {
    let img_check = 0
    let p = document.getElementById('paragraph_imegs_myclass')

    p.textContent = text_0;


    let btn_prev = document.getElementById('prev-button')
    let btn_next = document.getElementById('next-button')
    document.getElementById('img0').style.opacity = '1'
    document.getElementById('img0').style.transition = '1s'


    btn_next.addEventListener('click', function () {

        document.getElementById('img0').style.opacity = '0'
        document.getElementById('img1').style.opacity = '0'
        document.getElementById('img2').style.opacity = '0'
        document.getElementById('img3').style.opacity = '0'
        document.getElementById('img4').style.opacity = '0'
        if (img_check === 4) {
            img_check = 0
            p.textContent = text_0;

            document.getElementById('img' + img_check).style.transition = '1s'
            document.getElementById('img' + img_check).style.opacity = '1'


        } else {

            img_check++;
            switch (img_check) {
                case 0:
                    p.textContent = text_0;
                    break;
                case 1:
                    p.textContent = text_papa_hat;
                    break;
                case 2:
                    p.textContent = text_mati;
                    break;
                case 3:
                    p.textContent = text_megan;
                    break;
                case 4:
                    p.textContent = text_rasl;
                    break;
            }
            document.getElementById('img' + img_check).style.transition = '1s'
            document.getElementById('img' + img_check).style.opacity = '1'

        }

    })
    btn_prev.addEventListener('click', function () {

        document.getElementById('img0').style.opacity = '0'
        document.getElementById('img1').style.opacity = '0'
        document.getElementById('img2').style.opacity = '0'
        document.getElementById('img3').style.opacity = '0'
        document.getElementById('img4').style.opacity = '0'
        if (img_check === 0) {
            img_check = 4
            p.textContent = text_rasl;
            document.getElementById('img' + img_check).style.transition = '1s'
            document.getElementById('img' + img_check).style.opacity = '1'

        } else {
            img_check--;
            switch (img_check) {
                case 0:
                    p.textContent = text_0;
                    break;
                case 1:
                    p.textContent = text_papa_hat;
                    break;
                case 2:
                    p.textContent = text_mati;
                    break;
                case 3:
                    p.textContent = text_megan;
                    break;
                case 4:
                    p.textContent = text_rasl;
                    break;
            }
            document.getElementById('img' + img_check).style.transition = '1s'
            document.getElementById('img' + img_check).style.opacity = '1'

        }

    })
}

function jstest() {
    let value = 0
    let balss = 0
    let quest = [
        {q: '3', a: 'В каком году образована Гимназия?', v1: "1900", v2: " 1930", v3: "1920", v4: "Вчера"},
        {
            q: '1',
            a: 'В каком году школа вошла в число 500 школ страны',
            v1: "1955",
            v2: " 1900",
            v3: "1930",
            v4: "Не вошла"
        },
        {q: '3', a: 'Под каким номером Гимназия', v1: "40", v2: " 41", v3: "42", v4: "1"},
        {
            q: '2',
            a: 'Кто из учиников планирует поступать в престижный университет',
            v1: "Папа-хет",
            v2: "Матвей",
            v3: "Алиса",
            v4: "Сережа"
        },
        {q: '4', a: 'Когда состоялось второе рождение школы', v1: "1900", v2: " 1910", v3: "1990", v4: "1950"},
        {
            q: '1',
            a: 'Название школьной газеты',
            v1: "Наукоград-42",
            v2: "Газета-42",
            v3: "Школа-42",
            v4: "Гимназия-газета-42"
        }
    ]
    var buttons = document.getElementsByClassName('btn_answer')
    let h1 = document.getElementById('test_h1')
    let h2 = document.getElementById('quest');
    let btn_rel = document.getElementById('btn_reload')
    let div = document.getElementById('divasd')
    let ol = document.getElementById("quest_ol")
    let v1 = document.createElement("li")
    let v2 = document.createElement("li")
    let v3 = document.createElement("li")
    let v4 = document.createElement("li")
    v1.textContent = quest[value].v1
    v2.textContent = quest[value].v2
    v3.textContent = quest[value].v3
    v4.textContent = quest[value].v4
    ol.append(v1, v2, v3, v4)
    h2.textContent = quest[value].a

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {

            if (value === 5) {
                div.style.display = 'none'
                h1.textContent = 'Тест пройден!'
                h2.textContent = 'Вы прошли на ' + balss + " баллов"
                btn_rel.style.display = 'block'

            } else {
                if (quest[value].q === this.textContent) {

                    balss++;
                }
                value++;
                console.log(value)
                v1.textContent = quest[value].v1
                v2.textContent = quest[value].v2
                v3.textContent = quest[value].v3
                v4.textContent = quest[value].v4
                ol.append(v1, v2, v3, v4)
                h2.textContent = quest[value].a

            }
        });
    }

}

