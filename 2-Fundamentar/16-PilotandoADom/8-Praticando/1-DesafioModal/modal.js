const btnOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

function openModal() {
  modalWrapper.classList.remove('invisible')
}

function closeModal() {
  const modalWrapperIsInvisible = modalWrapper.classList.contains('invisible')

  if (!modalWrapperIsInvisible) {
    modalWrapper.classList.add('invisible')
  }
}

function keyCloseModalPressed(keyPressed) {
  if (keyPressed === 'Escape') {
    closeModal()
  }
}

btnOpenModal.addEventListener('click', openModal)

document.addEventListener('keydown', function (event) {
  keyCloseModalPressed(event.key)
})
