
const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response.data)
    return response.data
}

const DOM_Elements = {
    racer_list: ".racer-list"
}

const create_list = (id, name) => {
    const html = `<a href = "#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
    document.querySelector(DOM_Elements.racer_list).insertAdjacentHTML('beforeend', html)
}

const load_data = async () => {
    const racers = await getData();
    const my_array = racers.MRData.StandingTable.standingLists[0].Driver
    console.log(my_array)
    console.log(racers.Driver)
    racers.forEach(element => create_list(element.Driver.driverid, element.name))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.racers_list).innerHTML = '';
}