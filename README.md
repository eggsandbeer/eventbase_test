# eventbase_demo
#Hello eventbase guys

##Install
So, this make sure you have the latest versions of node/npm installed and then bower as well. I didn't write any tests for this, so you don't need to bother with Grunt.

So, run npm install, then bower install and then the grunt commnd to run the local server instance is 'grunt serve' and then you can see my work on localhost:8000.

The grunt/bower stuff for this project is just refactored from another test I did for a different job to suit the purposes here. Probably took me about 10 min to get it set up here. Hope that's OK.

I did not finish the requirements for the test and haven't implemented any of the event detail end point stuff. Probably spent too long getting the angular modules to play nice and just making silly mistakes with the routes for the various endpoints.

I found this test OK. The requirements in terms of what I was acutally building were way too loosely defined. The description doesn't state at all initially how the pieces are supposed to work together. I didn't realize there was a relation between each of the URL endpoints until way too late.

This comment:

*The only requirement for this test is that you use all 3 endpoints to allow a user to browse the available data.*

is acutally pretty misleading and made me think there was no relation at all between the endpoints and the whole thing was just supposed to be three separate widgets display data.

It's difficult to wrap your head around how the whole app workflow is supposed to work while you're also thinking about code architecture small and large, features, etc. Normally, I have a wireframe to work from to help me visualize how it's all going to work. I don't think I've ever gotten requirements to build a feature this complex without more guidance on how it's supposed to fit together. I was late in understanding, suffice to say.

I don't think that's a failure on my part thgough. I think 2 hours is way too short a time frame to build something like this. Why the rush? Are you just trying to test how I function under pressure? If I was asked to build something like this in the workplace in this amount of time, I'd probably refuse. It just leads to shoddy code (as my examples clearly show). No tests, no thoughtful organization, all kinds of missed pieces. Not sure what the point of the pressure is if it's not a realistic depiction of what happens at work. And if this IS a realistic depiction of what I would need to produce at EventBase, but in a production level of quality, please count me out of this job. That's way too much stress for me.

Things I would have liked to completed.
* Finish rigging up all the routes
* Properly integrate each of the features to each other.
* Some styling.
* Some unit and e2e tests.
* Higher level of code quality
