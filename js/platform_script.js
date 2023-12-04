let filterVariable = document.querySelectorAll('.filter-variable');
let contextBlock = document.querySelectorAll('.context-block');
let filterButton = document.querySelector('.filter-button');
let filterBlock = document.querySelector('.filter-block');
let filter = document.querySelector('.filter');
const apply = document.querySelector('.apply');
const loaderСontainer = document.querySelector('.loader-container');

filterButton.addEventListener('click', () => {
    if (filter.style.display === 'none' || filter.style.display === '') {
        filter.style.display = 'block';
    } else {
        filter.style.display = 'none';
    }
})

apply.addEventListener('click', () => {
    loaderСontainer.style.display = 'flex';
    setTimeout(function() {
        loaderСontainer.style.display = 'none';
    }, 2500);
})


let searchInput = document.getElementById('search-input');
let searchButton = document.querySelector('.search-button');
const paginations = document.querySelectorAll('.pagination');

paginations.forEach(pagin => {
    pagin.addEventListener('click', () => {
        resetAllActivePag();
        pagin.classList.add('active')
    })
});

function resetAllActivePag(){
    paginations.forEach(pagin => {
        pagin.classList.remove('active')
    });
}

const header = document.querySelector('header');
const logo = document.querySelector('.main-menu-logo');

logo.addEventListener('click', () => {
    if(header.classList.contains('active')){
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
})

const modal = document.getElementById('filterModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close-filter')[0];

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }

    if (event.target != logo) {
        header.classList.remove('active')
    }
});

const compModal = document.getElementById('compainingModal');
const addCompModal = document.getElementById('addCompainingModal');
const checkbox = document.querySelectorAll('.custom-checkbox');
const addCheckbox = document.querySelectorAll('.add-checkbox');
const createCompany = document.getElementById('contactsCompany');
const addCompany = document.getElementById('addCompany')
const closeBtnCompaining = document.getElementById('close-compaining');
const addCompanyBtn = document.getElementById('add-compaining')

const compainingInput = document.querySelector('.compaining-input');
const compainingApply = document.querySelector('.compaining-modal-apply');

checkbox.forEach(check => {
    check.addEventListener('change', () => {
        if(check.checked){
            createCompany.classList.add('active');
            addCompany.classList.add('active');
            createCompany.addEventListener('click', function() {
                compModal.style.display = 'block';
            }); 
            addCompany.addEventListener('click', function() {
                addCompModal.style.display = 'block';
            });   
        }else{
            createCompany.classList.remove('active');
            addCompany.classList.remove('active');
            compModal.style.display = 'none';
            addCompModal.style.display = 'none';
        }
    })
});

addCheckbox.forEach(check => {
    check.addEventListener('change', () => {
        if(check){
            addCompanyBtn.classList.add('active');
        }else{
            addCompanyBtn.classList.remove('active');
        }
    })
})

closeBtnCompaining.addEventListener('click', () => {
    compModal.style.display = 'none';
});

compainingInput.addEventListener('input', () => {
    const value = compainingInput.value;
    if (value !== '') {
        compainingApply.classList.add('active')
    } else if (value === '') {
        compainingApply.classList.remove('active')
    }
})
compainingApply.addEventListener('click', () => {
    compModal.style.display = 'none';
})

searchInput.addEventListener('input', () => {
    const value = searchInput.value;
    if (value !== '') {
        searchButton.classList.add('active')
    } else if (value === '') {
        searchButton.classList.remove('active')
    }
})

filterVariable.forEach((variable, index) => {
    variable.addEventListener('click', () => {
        removeActiveVariable()
        variable.classList.add('active');
        contextBlock[index].classList.add('active')
    })
});

function removeActiveVariable() {
    filterVariable.forEach(variable => {
        variable.classList.remove('active')
    })
    contextBlock.forEach(block => {
        block.classList.remove('active');
    })
}

const openBtn = document.getElementById('openBtn');
const sidePanel = document.getElementById('sidePanel');
const sidePanelUpdate = document.getElementById('sidePanelUpdate');
const closeBtnAdd = document.getElementById('closeBtnAdd');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function() {
  sidePanel.classList.add('open');
});

closeBtn.addEventListener('click', function() {
  sidePanel.classList.remove('open');
});

addCompanyBtn.addEventListener('click', function() {
    addCompModal.style.display = 'none';
    sidePanelUpdate.classList.add('open');
    console.log('update')
});

closeBtnAdd.addEventListener('click', function() {
    sidePanelUpdate.classList.remove('open');
});

window.addEventListener('click', function(event) {
    if (event.target == compModal) {
        compModal.style.display = 'none';
    }
});

const calendar = document.getElementById('calendar');
const calendarContainer = document.getElementById('calendarContainer');

calendar.addEventListener('click', function() {
    if (calendarContainer.style.display === 'none' || calendarContainer.style.display === '') {
        calendarContainer.style.display = 'block';
    } else {
        calendarContainer.style.display = 'none';
    }
});