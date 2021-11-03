function executeWidgetCode() {
    require(["UWA/Drivers/jQuery", 
			 "DS/WAFData/WAFData",
			 "DS/UIKIT/Input/Button",
			 "DS/UIKIT/DropdownMenu",
			 "DS/UIKIT/SuperModal"], 
		function($, 
				 WAFData,
				 Button,
				 DropdownMenu,
				 SuperModal) {
					 
        var myWidget = {
            dataFull: [],
			spacer : "   ",

            onLoadWidget: function() {				
						
				widget.body.innerHTML =	'<div></div>' 
										/* STEP 2 - Add a card info 
										+ '<div class="card">' +
										  '<img class="card-img" src="/Widgets/BKX/ASEWidgetExercice3/assets/avatarDefault.png">' +
										  '<div class="card-block">' +
											"<div id='cardDisplayName' class='header fonticon fonticon-user'>"+ myWidget.spacer + "Unknown</div>" +
											"</br>" +
											"<div id='cardEmail' class='header fonticon fonticon-vcard'>"+ myWidget.spacer + "no.email@email.com</div>" +
										  '</div>'+
										  '<div class="card-footer">'+
											'<div id="myContainerId"></div>' +					
										  '</div>'+
										'</div>'
										*/										
										;
				myWidget.callData();
            },

            callData: function() {
        		
				/* STEP 3 - Connect to the WebService. 
				var urlWAF = "https://vdemopro115nam.extranet.3ds.com/3DSpace/resources/modeler/pno/person?pattern=ASE*&select=firstname&select=lastname&select=email";				
                
				var headerWAF = {
                    SecurityContext: "ctx::VPLMAdmin.Company Name.Default"
                };
                var methodWAF = "GET";
         
                WAFData.authenticatedRequest(urlWAF, {
                    method: methodWAF,
                    headers: headerWAF,
                    type: "json",
                    onComplete: function(dataResp) {
						var button = new Button({ value: 'Select a Person...', icon : 'double-chevron-down'	}).inject(document.querySelector('#myContainerId'));
						var superModal = new SuperModal({ renderTo: document.querySelector('#myContainerId') });
						
						var dropdownmenu = new DropdownMenu({
							target: button.getContent(),	
							items: [
								{ className: "divider" },
								{ text: 'List Persons', className: 'header' }								
							],
							events: {
								onClick: function (e, item) { 
									*/
									/* STEP 4 - Update the Card Info  
									superModal.alert("Your email is " + item.name, 
													 item.text, 
													 function () {
														$("#cardDisplayName").get(0).textContent 	= myWidget.spacer + item.text;
														$("#cardEmail").get(0).textContent 			= myWidget.spacer + item.name;
													 }, 
													 "Done");
									*/
									/*
									
								}
							}
						});
						
						for (i = 0; i < dataResp.persons.length; i++) {
							
							var currPerson = dataResp.persons[i];
							dropdownmenu.addItem({ text: currPerson.name, fonticon: 'user-alt', name:currPerson.email });
							
						}
						
                    },
                    onFailure: function(error) {
                        widget.body.innerHTML += "<p>Call Faillure</p>";
                        widget.body.innerHTML += "<p>" + JSON.stringify(error) + "</p>";
                    }
                });
				*/
            }
        };

        widget.addEvent("onLoad", myWidget.onLoadWidget);
        /* widget.addEvent("onRefresh", myWidget.onLoadWidget); */
    });
}
