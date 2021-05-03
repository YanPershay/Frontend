if (window.addEventListener) window.addEventListener("load", init, false);

function init() {
    for (var i = 0; i < document.forms.length; i++) {
        var form = document.forms[i];

        var formValidation = false;

        for (var j = 0; j < form.elements.length; j++) {
            var e = form.elements[j];

            if (e.type != "text") {
                continue;
            }

            var pattern = e.getAttribute("data-val");

            if (pattern) {
                e.onchange = validateInput;
                formValidation = true;
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm;
        }
    }
}

function validateInput() {
    var pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    var res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    }
    else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

function validateForm() {
    var invalid = false;

    for (var i = 0; i < this.elements.length; ++i) {
        var e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "error") invalid = true;
        }
    }

    if (invalid) {
        alert("Errors while entering form.");
        return false;
    }
}