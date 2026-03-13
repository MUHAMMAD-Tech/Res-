class LethLib {
    constructor() {
        this.init();
    }

    // --- ASOSIY MODAL FUNKSIYASI ---
    // btn: .k-btn, modal: .k-modal, close: .k-close, input: .k-input
    setupModal(btnCls, modalCls, closeCls, inputCls = null) {
        const buttons = document.querySelectorAll(btnCls);
        const modals = document.querySelectorAll(modalCls);

        buttons.forEach((btn, index) => {
            btn.onclick = () => {
                // Shu tugmaga tegishli modal va inputni topamiz
                const targetModal = modals[index]; 
                const targetInput = inputCls ? document.querySelectorAll(inputCls)[index] : null;

                // MANTIQ: Input bo'sh bo'lmasa modal ochilsin
                if (targetInput && targetInput.value.trim() === "") {
                    alert("Iltimos, maydonni to'ldiring!");
                } else {
                    if (targetModal) targetModal.classList.add('active');
                }
            };
        });

        // Yopish tugmalari uchun
        document.querySelectorAll(closeCls).forEach((closeBtn, index) => {
            closeBtn.onclick = () => {
                if (modals[index]) modals[index].classList.remove('active');
            };
        });
    }

    init() {
        console.log("LethLib Klass tizimi ishga tushdi!");
    }
}

const LL = new LethLib();

  // Klass nomlarini yuboramiz
LL.setupModal('.k-btn', '.k-modal', '.k-close', '.k-input');
