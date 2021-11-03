function executeWidgetCode() {
    require(["UWA/Drivers/jQuery", 
			 'DS/UIKIT/Form',
			 'DS/UIKIT/Spinner',
			 'DS/UIKIT/Alert'], 
		function ($,				  
				  Form,
				  Spinner,
				  Alert) {
        
		var myWidget = {
            onLoadWidget: function () {
                widget.body.innerHTML =	"<div id='myContainerId'></div>";
				
				/* STEP 3 - Add a “form” pointing to your preferences 
				var alert = new Alert({
					visible: true,
					autoHide: true,
					hideDelay: 3000
				}).inject(document.querySelector('#myContainerId'));

				new Form({
					fields: [{
						type: 'text',
						label: 'UserName',
						value: widget.getValue("UserName"),
						required: true,
						name: 'my_username'
					},{
						type: 'text',
						label: 'First Name',						
						value: widget.getValue("FirstName"),
						name: 'my_firstname'
					},{
						type: 'text',
						label: 'Last Name',						
						value: widget.getValue("LastName"),
						name: 'my_lastname'
					}, {
						type: 'email',
						label: 'username',						
						value: widget.getValue("Email"),
						name: 'my_email'
					}],
					buttons: [
						{ type: 'submit', value: 'Update' }						
					],
					events: {
						onSubmit: function () {
							*/
							/* STEP 4 - Update the preferences with the “Update” button 
							new Spinner({ duration: 3000, className: 'large' }).inject(document.querySelector('#myContainerId'));
							alert.add({
								className: 'primary',
								message: 'Updating your preferences...'
							});
							widget.setValue('UserName',	this.getValue('my_username'));
							widget.setValue('FirstName',this.getValue('my_firstname'));
							widget.setValue('LastName',	this.getValue('my_lastname'));
							widget.setValue('Email',	this.getValue('my_email'));
							*/
							/*
						}
					}
				}).inject(document.querySelector('#myContainerId'));
				*/
            }
        };

        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}
