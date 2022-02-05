let room = {
    wall: {
        lookAt: function () {
            if (!this.wallpaper.isRippedOff) {
                this.seen = true;
                return [`Осматривая стену, вы заметили, что край обоев плохо приклеен.`];
            }
            return [`На стене под оборванными обоями написано ваше имя.`];
        },
        seen: false,
        wallpaper: {
            ripOff: function () {
                this.isRippedOff = true;
                return [`Потянув за краешек, вы оборвали обои. На стене написано "Берегись, ${name}!"`];
            },
            isRippedOff: false
        }
    },
    lookAt: function () {
        this.seen = true;
        return [`В комнате всюду облезшие обои, паутина и пыль. Посередине упавшая старинная люстра, слева большое окно, а справа дверь. Куда же она ведет?`];
    },
    seen: false
}

let hallway = {
    stairs: {
        lookAt: function () {
            this.seen = true;
            return [`Лестница ведет наверх и вниз. Кажется, вверху горит свет.`];
        }
    },
    lookAt: function () {
        this.seen = true;
        return [`Справа входная дверь, в конце коридора окно, посередине лестница.`];
    },
    seen: false
}

function listAvailableActions() {
    let actions = [];

    actions.push('осмотреть комнату');
    if (room.seen) {
        actions.push('открыть дверь');
        actions.push('выглянуть в окно');
    }
    actions.push('осмотреть стены');
    if (room.wall.seen) {
        actions.push('потянуть за край обоев');
    }
    return [`Вы можете ${actions.join(', ')}`];
}

let myLocation = 0;

function writeWhereAmI() {
    if (myLocation === 0) {
        return [`Вы находитесь в старом заброшенном особняке. Перед вам стена с оборванными обоями и, кажется, там что-то написано.`];
    }
    return [`Вы находитесь в старом заброшенном особняке. Перед вами коридор, посередине лестница, куда же она ведет?`];
}

let name;
function start() {
    name = prompt('Введите ваше имя');
    return [...writeWhereAmI(), ...listAvailableActions()];
}

function act(action) {
    let result = [];
    if (action === 'осмотреть стены') {
        result.push(...room.wall.lookAt());
    } else if (action === 'осмотреть комнату') {
        result.push(...room.lookAt());
    } else if (room.wall.seen && action === 'потянуть за край обоев') {
        result.push(...room.wall.wallpaper.ripOff());
    }
    result.push(...listAvailableActions());
    return result;
}
