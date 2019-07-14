window.onload = function () {

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startBtn = document.getElementById('start_btn');
    let titleH1 = document.getElementById('title');

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;


    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();

        startBtn.classList.add('animate');
        // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
        setTimeout(() => {
            startBtn.classList.remove('animate');
            startBtn.style.display = 'none';
        }, 700);
    }


    function startGame() {
        resetScoreAndTime();
        peep();

        setTimeout(() => {
            // TODO: 写当游戏时间结束后要发生的事
            $('#dazhong').empty();
        }, gameTime)
    }

    /**
     * 初始化设置.
     */
    function resetScoreAndTime() {
        // TODO: 写游戏的初始化设置
         tl_time = parseInt(tl.value);//停留时间
                    jg_time = parseInt(jg.value);//间隔时间
                    sc_time = parseInt(sc.value);//游戏时长

                    //设置第一次开始游戏
                    isOneStart = true;

                    //记录游戏开始时间
                    start_Time = new Date();
    }

    /**
     * 出洞.
     */
    function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        comeOutAndStop(hole, time);
    }

    /**
     * 随机生成地鼠出洞的停留时间. 该时间其实是[min, max]间的随机数.
     *
     * @param min 随机数的下界.
     * @param max 随机数的上界.
     * @returns {number}
     */
    function randomTime(min, max) {
        // TODO: 写生成随机数的逻辑，
        ranK = Math.floor* (max - min+1)) + max;
        return 0;
    }

    /**
     * 随机选择地鼠钻出的地洞，如果与上一个是相同地洞，则重新选择一个地洞.
     *
     * @param holes
     * @returns {*}
     */
    function randomHole(holes) {
        // TODO: 写地鼠随机选择钻出地洞的逻辑，如果与上一个是相同地洞，则重新选择一个地洞.
        jg_id = setTimeout("mouse_show()",jg_time*1000);
                //地鼠停留时间
                tl_id = setTimeout("mouse_hide("+i+")",tl_time*1000);
        return null;
    }

    /**
     * 地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
     *
     * @param hole 地鼠所出地洞.
     * @param time 地鼠停留时间.
     */
    function comeOutAndStop(hole, time) {
        // TODO: 写地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
                clearTimeout(tl_id);
                clearTimeout(jg_id);
                clearTimeout(djs_id);
                clearTimeout(play_id);
                if(!isOneStart){
                    clearTimeout(jxDJS_id);
                }
                isStart = false;
                djs_span.innerHTML = 0;

                zt_div.style.display = "none";
                qingchang();
    }

    /**
     * 打地鼠。为每个moles添加点击事件，点击后分数显示+1，地鼠入洞。
     */
    moles.forEach(mole => mole.addEventListener('click', function (e) {
        // TODO: 在这里写用户点击地鼠发生的事.
         var name = imgs[i].src.substr(imgs[i].src.length-5,1);

                if(name == 1){
                    imgs[i].src = "img/00.jpg";

                    //计分
                    ld++;
                    df--;
                    if(df<=0){
                        df = 0;
                    }
                    df_span.innerHTML = "打中"+dz+"只，漏掉"+ld+"只，得分"+df;
                }
    }));

};
