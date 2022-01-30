let room = {
    wall: {
        lookAt: function () {
            if (!this.wallpaper.isRippedOff) {
                console.log(`Осматривая стену, вы заметили, что край обоев плохо приклеен.`);
                this.seen = true;
            } else {
                console.log(`На стене под оборванными обоями написано ваше имя.`);
            }
        },
        seen: false,
        wallpaper: {
            ripOff: function () {
                console.log(`Потянув за краешек, вы оборвали обои. На стене написано "Берегись, ${name}!"`);
                this.isRippedOff = true;
            },
            isRippedOff: false
        }
    },
    lookAt: function () {
        console.log(`В комнате всюду облезшие обои, паутина и пыль. Посередине упавшая старинная люстра, слева большое окно, а справа дверь. Куда же она ведет?`);
        this.seen = true;
    },
    seen: false
};

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
    console.log(`Вы можете ${actions.join(', ')}`);

}

let name = prompt('Введите ваше имя');
console.log(`Вы находитесь в старом заброшенном особняке. Перед вам стена с оборванными обоями и, кажется, там что-то написано.`);
listAvailableActions();
function act(action) {
    if (action === 'Осмотреть стену') {
        room.wall.lookAt();
    } else if (action === 'Осмотреть комнату') {
        room.lookAt();
    } else if (room.wall.seen && action === 'Потянуть за край обоев') {
        room.wall.wallpaper.ripOff();
    }
    listAvailableActions();
}
