buyTab = document.getElementById("buyTab")
achTab = document.getElementById("achTab")
optionsTab = document.getElementById("optionsTab")

buyPanel = document.getElementById("buyPanel")
achPanel = document.getElementById("achPanel")
optionsPanel = document.getElementById("optionsPanel")

buyTab.addEventListener("click", function(a){
    buyPanel.style.display = "inline-block"
    achPanel.style.display = "none"
    optionsPanel.style.display = "none"
})

achTab.addEventListener("click", function(a){
    buyPanel.style.display = "none"
    achPanel.style.display = "inline-block"
    optionsPanel.style.display = "none"
})

optionsTab.addEventListener("click", function(a){
    buyPanel.style.display = "none"  
    achPanel.style.display = "none"
    optionsPanel.style.display = "inline-block"

})