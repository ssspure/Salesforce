({
	invoke : function(component, event, helper) {
        var urlString = window.location.href;
        var baseURL = urlString.substring(0, urlString.indexOf("/s/"));
        var redirectURL = component.get("v.redirectURL");
        var redirect = $A.get("e.force:navigateToURL");
        redirectURL = baseURL + "/s/" + redirectURL;
        redirect.setParams({
          "url": redirectURL
        });
       redirect.fire();
	}
})