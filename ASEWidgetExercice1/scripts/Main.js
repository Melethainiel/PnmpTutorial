function executeWidgetCode() {
    require(["UWA/Drivers/jQuery", 
		     "HelloModule/Toto"], 
		function ($, 
				  totoModule) {
        var myWidget = {
            
			onLoadWidget: function () {
                
				
				widget.body.innerHTML = "<p>Hello, World !</p>" 
										/* STEP 7 - Access the widget's preferences 
										+ "<br/>" +
										totoModule.fctHello(widget.getValue("UserName")) 		+ "<br/>" + "<br/>" +
										"Your First name is : " + widget.getValue("FirstName") 	+ "<br/>" +
										"Your Last name is : "  + widget.getValue("LastName") 	+ "<br/>" + "<br/>" +
										"Your Email  is : "     + widget.getValue("Email") 		+ "<br/>" + "<br/>" +
										"<button type=\"button\" onclick=\"alert('Hello world!')\">Click Me!</button>" 
										*/
										;
            },
            toto: "test"
        };

        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}
