$(() => {
    $(".page-2").hide();
    $(".page-3").hide();
    $(".page-4").hide();
    $(".page-5").hide();
    $(".page-6").hide();
    $(".page-7").hide();
    $(".page-8").hide();
    $(".page-9").hide();
    $(".page-10").hide();
    $(".input-group__error").hide();
    let userName = "Não informado!";

    $(".bad-test").hide();
    $(".intermediary-test").hide();
    $(".nice-test").hide();

    $("#btn-start").on('click', () => {
        $(".page-2").show(200);
        $(".page-1").hide(200);
    });

    // PAGE 2
    $("#btn-yes").on('click', (e) => {
        e.preventDefault();

        $("#btn-yes").addClass('btn-primary').removeClass('btn-light');
        $("#btn-no").addClass('btn-light').removeClass('btn-primary');
    });

    $("#btn-no").on('click', (e) => {
        e.preventDefault();

        $("#btn-yes").addClass('btn-light').removeClass('btn-primary');
        $("#btn-no").addClass('btn-primary').removeClass('btn-light');
    });

    $("#page-2-continue").on('click', (e) => {
        e.preventDefault();

        if (!$("#input-name").val().length) {
            $("#error_name").show(20);
            return;
        } else {
            $("#error_name").hide(20);
        }

        if (!$("#input-age").val().length) {
            $("#error_age").show(20);
            return;
        } else {
            $("#error_age").hide(20);
        }

        $(".page-2").hide(200);
        $(".page-3").show(200);

        $(".section-nome").text($("#input-name").val());
        userName = $("#input-name").val();
    });
    // PAGE 3
    $("#page-3-continue").on('click', () => {
        $(".page-3").hide(200);
        $(".page-4").show(200);
    });

    // PAGE 4
    $("#page-4-continue").on('click', () => {
        $(".page-4").hide(200);
        $(".page-5").show(200);
    })

    let lastPosition = 360;
    let clicks = 0;
    let hitPercentage = 0;
    let maxNumberClicks = 16;
    let pointForHit = 50 / maxNumberClicks;

    handlePointsByArrowClicked = (element, position) => {
        let elementClass = $(element.currentTarget).attr('class').split(' ')[1];

        let options = {
            'game__arrow-right': () => position === 360,
            'game__arrow-left': () => position === 180,
            'game__arrow-top': () => position === -90,
            'game__arrow-bottom': () => position === 90,
        }

        if(options[elementClass]()){
            hitPercentage += pointForHit;
        }
    }

    const handlePosition = (element) => {
        var angulos = [90, 180, -90, 360];
        var indiceAleatorio = Math.floor(Math.random() * angulos.length);
        var anguloAleatorio = angulos[indiceAleatorio];

        if (lastPosition == anguloAleatorio) {
            return handlePosition(element);
        }

        handlePointsByArrowClicked(element, lastPosition);

        lastPosition = anguloAleatorio;
        $(".game__test").css('transform', `rotate(${anguloAleatorio}deg)`);

        clicks++;
        if (clicks % 4 === 0) {
            let px = $(".game__test").css('font-size').split('px')[0];

            $(".game__test").css('font-size', px - 12);

            if (clicks === maxNumberClicks) {
                $(".page-5").hide(200);
                $(".page-6").show(200);
            }

            if (clicks === 32) {
                $(".page-8").hide(200);
                $(".page-9").show(200);
            }
        }
    }

    $(".arrow").click(handlePosition);

    // PAGE 6
    $(".btn-page-6").on('click', () => {
        $(".page-6").hide(200);
        $(".page-7").show(200);
    });

    // PAGE 7
    $("#page-7-continue").on('click', () => {
        $(".page-7").hide(200);
        $(".page-8").show(200);
        $(".game__test").css('font-size', 50);
    });

    // PAGE 8

    // PAGE 9
    $(".btn-page-9").on('click', () => {
        $(".page-9").hide(200);
        $(".page-10").show(200);

        $(".section__percentage").text(`${hitPercentage.toFixed(0)}%`);

        if(hitPercentage < 50){
            $(".section__percentage").addClass('text-danger');
            $(".bad-test").show();
        }else if(hitPercentage < 70) {
            $(".section__percentage").addClass('text-warning');
            $(".intermediary-test").show();
        } else {
            $(".section__percentage").addClass('text-success');
            $(".nice-test").show();
        }
    });
    // https://wa.me/16474986749
    // href="" 
    $(".page-10__button").on('click', (e) => {
        e.preventDefault();

        console.log('1');
        let message = `Olá, meu nome é ${userName}. Fiz um teste e meu resultado foi ${hitPercentage.toFixed(0)}%. Gostaria de atendimento para resultados mais detalhados.`;

        window.location.href = `https://wa.me/558181175028?text=${message}`;
    });
});