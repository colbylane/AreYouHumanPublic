({
    doInit : function(component, event, helper) {
        
    },
    
    verifiedResult : function(component, event, helper) {

        /*This is a simple example of handling the result and in this case enabling the submit button*/

		var ayhResult = event.getParam("result");
        component.set("v.verified", ayhResult);
	},
    
    submitExample : function(component, event, helper) {
        var firstName = component.get("v.firstName");
        var lastName = component.get("v.lastName");
        
        var name = (firstName.length>0 ? firstName : "Missing First Name") + " " + (lastName.length>0 ? lastName : "Missing Last Name");
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title":"Thank You",
            "type": "success",
            "message": "Thank you, " + name + " for trying out the demo!",
            "duration" : 4000
        });
        toastEvent.fire();
    }
})