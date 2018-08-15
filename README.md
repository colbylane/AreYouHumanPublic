# AreYouHumanPublic
Welcome to the Are You Human public repository!  Use the package contents to review the sample component that implements the AreYouHuman component and event into a simple contact form.  [Remember to check out our sample site for a live example of the component.](https://ayhpublictest-developer-edition.na53.force.com/Sample/s/ "Are You Human Sample Site")

## TL;DR - I've downloaded it, now what?
To begin using the component, you only need to complete 3 steps:
1. Add the AreYouHuman component into one of your own components.
2. Register the HumanCheck event into one of your own components (either the same or another component).
3. Add an event handler for the HumanCheck event.

That's it!  In the source code example, the AreYouHuman component controls enabling the submit button and the event handler is as simple as this:

```
var ayhResult = event.getParam("result");
component.set("v.verified", ayhResult);
```

You can of course add your own logic as you see fit, but if you're new to Lightning just learning this will help get you up and going quickly.
