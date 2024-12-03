document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const addMoney = getInputFieldById("amount-to-add");
    const pinNumber = getInputFieldById("pin-number");

    if (pinNumber === Number(1234)) {
      const balance = gettextFieldValueById("current-balance");
      const newBalance = balance + addMoney;
      document.getElementById("current-balance").innerText = newBalance;

      const contain = document.createElement("div");
      contain.innerHTML = `
        
          <div class="flex justify-between items-center p-5 bg-slate-100 rounded-lg mb-2">
                        <div class="flex items-center gap-3">
                            <img class="w-10 h-10" src="img/transation (4).png" alt="">
                            <div>
                                <p class="text-xl font-semibold">Add Money</p>
                                <p>Today <span id="datetime"></span></p>
                                <p class="text-sm font-semibold">Add Money : ${addMoney}</p>
                            </div>
                        </div>
                        <div>
                            <p>....</p>
                            
                        </div>
                     </div>
        `;
      document.getElementById("trans-app-container").appendChild(contain);
    } else {
      alert("Failed to add the Money");
    }
  });
