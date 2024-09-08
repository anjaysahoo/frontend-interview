
const input = document.createElement('input');

const state = { value: 'Hi'};

function model(state, input){
    input.value = state.value;

    Object.defineProperty(state, 'value', {
        get(){
            console.log("get called: ");
            return input.value;
        },
        set(new_value) {
            console.log("set called: ");
            input.value = new_value;
        }
    })


    input.addEventListener('change',(event) => {
        state.value = event.target.value;
    })
}

model(state, input);

console.log(state.value);

console.log(input.value);

state.value = 'dev';

console.log(input.value);

input.value = 'engineerchirag';

input.dispatchEvent(new Event('change'));

console.log(state.value);
